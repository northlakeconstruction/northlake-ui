resource "aws_acm_certificate" "main" {
  domain_name       = var.domain_name
  validation_method = "DNS"

  subject_alternative_names = [
    "www.${var.domain_name}"
  ]

  lifecycle {
    create_before_destroy = true
  }

  tags = merge(local.tags, {
    Name = var.domain_name
  })
}

# Note: DNS validation records must be added manually or via Route 53 (if using it)
# The validation_options are available for the user to add CNAME records to their DNS provider
