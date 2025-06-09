resource "aws_s3_bucket" "mytasks_shell" {
  bucket = "${var.ENV}-mytasks-shell"
}

resource "aws_s3_bucket" "mytasks_auth" {
  bucket = "${var.ENV}-mytasks-auth"
}

resource "aws_s3_bucket" "mytasks_tasks" {
  bucket = "${var.ENV}-mytasks-tasks"
}
