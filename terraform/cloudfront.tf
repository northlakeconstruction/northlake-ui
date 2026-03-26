resource "aws_cloudfront_origin_access_control" "s3" {
  name                              = "${local.app_name}-s3-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "no-override"
  signing_protocol                  = "sigv4"
}

# Cache policy for immutable assets (_next/static/*)
resource "aws_cloudfront_cache_policy" "static_immutable" {
  name            = "${local.app_name}-static-immutable"
  comment         = "Cache policy for immutable Next.js static chunks"
  default_ttl     = 31536000  # 1 year
  max_ttl         = 31536000  # 1 year
  min_ttl         = 1

  parameters_in_cache_key_and_forwarded_to_origin {
    headers_config {
      header_behavior = "none"
    }
    cookies_config {
      cookie_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "none"
    }
  }
}

# Cache policy for images (30-day cache)
resource "aws_cloudfront_cache_policy" "images" {
  name            = "${local.app_name}-images"
  comment         = "Cache policy for public images"
  default_ttl     = 2592000   # 30 days
  max_ttl         = 31536000  # 1 year
  min_ttl         = 1

  parameters_in_cache_key_and_forwarded_to_origin {
    headers_config {
      header_behavior = "none"
    }
    cookies_config {
      cookie_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "none"
    }
  }
}

# Origin request policy for Lambda (pass all headers except Host)
resource "aws_cloudfront_origin_request_policy" "lambda" {
  name            = "${local.app_name}-lambda-origin-request"
  comment         = "Origin request policy for Lambda backend"

  headers_config {
    header_behavior = "allExcept"
    headers {
      items = ["Host"]
    }
  }
  cookies_config {
    cookie_behavior = "all"
  }
  query_strings_config {
    query_string_behavior = "all"
  }
}

# Cache policy for disabling caching (for dynamic content)
resource "aws_cloudfront_cache_policy" "disabled" {
  name            = "${local.app_name}-disabled"
  comment         = "Disable caching for dynamic content"
  default_ttl     = 0
  max_ttl         = 0
  min_ttl         = 0

  parameters_in_cache_key_and_forwarded_to_origin {
    headers_config {
      header_behavior = "none"
    }
    cookies_config {
      cookie_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "none"
    }
  }
}

resource "aws_cloudfront_distribution" "main" {
  enabled = true
  aliases = [
    var.domain_name,
    "www.${var.domain_name}"
  ]

  # Default behavior: Lambda (dynamic content, no cache)
  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "lambda"

    cache_policy_id          = aws_cloudfront_cache_policy.disabled.id
    origin_request_policy_id = aws_cloudfront_origin_request_policy.lambda.id

    compress = true

    viewer_protocol_policy = "redirect-to-https"
  }

  # Static Next.js chunks: long cache, immutable
  ordered_cache_behavior {
    path_pattern     = "/_next/static/*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3"

    cache_policy_id = aws_cloudfront_cache_policy.static_immutable.id

    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }

  # Public images: 30-day cache
  ordered_cache_behavior {
    path_pattern     = "/images/*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3"

    cache_policy_id = aws_cloudfront_cache_policy.images.id

    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }

  # Origin: API Gateway
  origin {
    domain_name = trimsuffix(replace(aws_apigatewayv2_stage.default.invoke_url, "https://", ""), "/")
    origin_id   = "lambda"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  # Origin: S3 bucket
  origin {
    domain_name            = aws_s3_bucket.assets.bucket_regional_domain_name
    origin_id              = "s3"
    origin_access_control_id = aws_cloudfront_origin_access_control.s3.id
  }

  # TLS certificate
  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.main.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  # Geolocation and pricing
  price_class = "PriceClass_100"  # US and Europe only

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = local.tags

  # Ensure certificate and API Gateway are ready before creating distribution
  depends_on = [aws_acm_certificate.main, aws_apigatewayv2_stage.default]
}
