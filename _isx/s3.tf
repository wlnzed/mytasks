resource "aws_s3_bucket" "mytasks_shell" {
  bucket        = "${var.ENV}-mytasks-shell"
  force_destroy = true
}

resource "aws_s3_bucket" "mytasks_auth" {
  bucket        = "${var.ENV}-mytasks-auth"
  force_destroy = true
}

resource "aws_s3_bucket" "mytasks_tasks" {
  bucket        = "${var.ENV}-mytasks-tasks"
  force_destroy = true
}
