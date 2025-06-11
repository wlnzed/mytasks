resource "aws_dynamodb_table" "mytasks-tasks" {
  name         = "prod-mytasks-tasks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "OwnerEmail"
  range_key    = "Id"

  attribute {
    name = "OwnerEmail"
    type = "S"
  }

  attribute {
    name = "Id"
    type = "S"
  }

  lifecycle {
    prevent_destroy = true
  }
}
