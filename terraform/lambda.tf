resource "aws_iam_role" "lambda_execution" {
  name = "${local.app_name}-lambda-execution-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })

  tags = local.tags
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  role       = aws_iam_role.lambda_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy" "lambda_sns_publish" {
  name = "${local.app_name}-lambda-sns-publish"
  role = aws_iam_role.lambda_execution.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "sns:Publish"
        ]
        Resource = [
          var.sns_topic_arn
        ]
      }
    ]
  })
}

# Data source for Lambda code from .open-next/server-functions/default
data "archive_file" "lambda_code" {
  type        = "zip"
  source_dir  = "../.open-next/server-functions/default"
  output_path = "../.terraform_lambda_code.zip"
}

resource "aws_lambda_function" "server" {
  filename            = data.archive_file.lambda_code.output_path
  source_code_hash    = data.archive_file.lambda_code.output_base64sha256
  function_name       = "${local.app_name}-server"
  role                = aws_iam_role.lambda_execution.arn
  handler             = "index.handler"
  runtime             = "nodejs22.x"
  architectures       = ["arm64"]
  memory_size         = var.lambda_memory
  timeout             = var.lambda_timeout

  environment {
    variables = {
      SNS_REGION                      = var.aws_region_sns
      NEW_LEAD_TOPIC_ARN              = var.sns_topic_arn
      TURNSTILE_VALIDATION_ENDPOINT   = "https://challenges.cloudflare.com/turnstile/v0/siteverify"
      TURNSTILE_SECRET_KEY            = var.turnstile_secret
    }
  }

  tags = local.tags

  depends_on = [aws_iam_role_policy_attachment.lambda_basic_execution]
}

resource "aws_lambda_function_url" "server" {
  function_name          = aws_lambda_function.server.function_name
  authorization_type    = "NONE"
  cors {
    allow_origins = ["*"]
    allow_methods = ["*"]
    allow_headers = ["*"]
  }
}
