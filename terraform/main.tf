terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "northlake-tf-state"
    key            = "northlake-ui/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-locks"
  }
}

provider "aws" {
  region = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "prod"
}

variable "domain_name" {
  description = "Primary domain name"
  type        = string
  default     = "northlake-construction.com"
}

variable "aws_account_id" {
  description = "AWS Account ID"
  type        = string
  default     = "300724398050"
}

variable "aws_region_sns" {
  description = "AWS region for SNS (where the topic exists)"
  type        = string
  default     = "us-east-2"
}

locals {
  app_name = "northlake"
  tags = {
    Project     = local.app_name
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}

data "aws_caller_identity" "current" {}
data "aws_region" "current" {}
