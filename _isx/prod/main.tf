terraform {
  required_version = ">= 1.2.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  backend "s3" {
    bucket         = "prod-mytasks-tf"
    dynamodb_table = "prod-mytasks-tf"
    key            = "prod-mytasks.tfstate"
    region         = "eu-west-2"
  }
}

provider "aws" {
  region     = "eu-west-2"
  access_key = var.AWS_ACCESS_KEY
  secret_key = var.AWS_SECRET_KEY
}
