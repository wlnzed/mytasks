resource "aws_s3_bucket" "mytasks_shell" {
  bucket        = "prod-mytasks-shell"
  force_destroy = true
}

resource "aws_s3_bucket" "mytasks_auth" {
  bucket        = "prod-mytasks-auth"
  force_destroy = true
}

resource "aws_s3_bucket" "mytasks_tasks" {
  bucket        = "prod-mytasks-tasks"
  force_destroy = true
}
