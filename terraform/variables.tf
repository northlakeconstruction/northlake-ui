variable "turnstile_secret" {
  description = "Cloudflare Turnstile secret key (sensitive)"
  type        = string
  sensitive   = true
}

variable "sns_topic_arn" {
  description = "SNS topic ARN for contact form submissions"
  type        = string
  default     = "arn:aws:sns:us-east-2:300724398050:northlake-construction"
}

variable "turnstile_site_key" {
  description = "Cloudflare Turnstile site key (public)"
  type        = string
  default     = "0x4AAAAAACv7jcz-1LrGn-jr"
}

variable "lambda_memory" {
  description = "Lambda function memory in MB"
  type        = number
  default     = 512
}

variable "lambda_timeout" {
  description = "Lambda function timeout in seconds"
  type        = number
  default     = 30
}

variable "s3_bucket_name" {
  description = "S3 bucket name for static assets"
  type        = string
  default     = "northlake-ui-assets"
}
