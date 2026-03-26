output "cloudfront_domain" {
  description = "CloudFront distribution domain name for DNS CNAME"
  value       = aws_cloudfront_distribution.main.domain_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID for cache invalidation"
  value       = aws_cloudfront_distribution.main.id
}

output "assets_bucket_name" {
  description = "S3 bucket name for static assets"
  value       = aws_s3_bucket.assets.id
}

output "lambda_function_name" {
  description = "Lambda function name"
  value       = aws_lambda_function.server.function_name
}

output "lambda_function_url" {
  description = "Lambda function URL"
  value       = aws_lambda_function_url.server.function_url
}

output "acm_certificate_arn" {
  description = "ACM certificate ARN"
  value       = aws_acm_certificate.main.arn
}

output "acm_certificate_validation_options" {
  description = "DNS validation options for ACM certificate (add these CNAME records to your DNS provider)"
  value = [
    for dvo in aws_acm_certificate.main.domain_validation_options : {
      domain_name = dvo.domain_name
      name        = dvo.resource_record_name
      record_type = dvo.resource_record_type
      value       = dvo.resource_record_value
    }
  ]
}

output "github_role_arn" {
  description = "GitHub Actions IAM role ARN"
  value       = aws_iam_role.github_actions.arn
}
