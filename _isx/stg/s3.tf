resource "aws_s3_bucket" "mytasks_shell" {
  bucket        = "stg-mytasks-shell"
  force_destroy = true
}

resource "aws_s3_bucket" "mytasks_auth" {
  bucket        = "stg-mytasks-auth"
  force_destroy = true
}

resource "aws_s3_bucket" "mytasks_tasks" {
  bucket        = "stg-mytasks-tasks"
  force_destroy = true
}
