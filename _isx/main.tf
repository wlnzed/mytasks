terraform {
  required_version = ">= 1.2.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  backend "s3" {
    bucket = "mytasks-tf"
    key    = "mytasks.tfstate"
    region = "eu-west-2"
  }
}

provider "aws" {
  region  = "eu-west-2"
  profile = "default"
}

variable "ENV" {
  type = string
}

variable "TEST_EMAIL" {
  type = string
}
