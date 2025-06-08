resource "aws_s3_bucket" "mytasks_shell" {
  bucket = "mytasks-shell"
}

resource "aws_s3_bucket" "mytasks_auth" {
  bucket = "mytasks-auth"
}

resource "aws_s3_bucket" "mytasks_tasks" {
  bucket = "mytasks-tasks"
}
