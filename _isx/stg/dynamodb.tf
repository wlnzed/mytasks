resource "aws_dynamodb_table" "mytasks-tasks" {
  name         = "stg-mytasks-tasks"
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
}

resource "aws_dynamodb_table_item" "test_item_1" {
  # only create if a test email is provided indicating testing intent
  count = var.TEST_EMAIL == "" ? 0 : 1

  table_name = aws_dynamodb_table.mytasks-tasks.name
  hash_key   = aws_dynamodb_table.mytasks-tasks.hash_key
  range_key  = aws_dynamodb_table.mytasks-tasks.range_key

  item = <<ITEM
  {
    "OwnerEmail": { "S": "${var.TEST_EMAIL}"},
    "Id": { "S": "38b9b336-259d-4200-83da-572e822a7713" },
    "Title": { "S": "Task #1" },
    "Description": { "S": "Do something" },
    "IsDone": { "BOOL": false },
    "Subtasks": { "L": [
      {
        "M": {
          "Id": { "S": "ee8f7a69-d814-471a-aa05-34dee41c803b"},
          "Title": { "S": "Do the first part" },
          "IsDone": { "BOOL": true }
        }
      },
      {
        "M": {
          "Id": { "S": "5024cc95-b7a4-4cd5-b5c1-8eafd29aa7af"},
          "Title": { "S": "Do the second part" },
          "IsDone": { "BOOL": false }
        }
      }
    ]}
  }
  ITEM
}

resource "aws_dynamodb_table_item" "test_item_2" {
  # only create if a test email is provided indicating testing intent
  count = var.TEST_EMAIL == "" ? 0 : 1

  table_name = aws_dynamodb_table.mytasks-tasks.name
  hash_key   = aws_dynamodb_table.mytasks-tasks.hash_key
  range_key  = aws_dynamodb_table.mytasks-tasks.range_key

  item = <<ITEM
  {
    "OwnerEmail": { "S": "${var.TEST_EMAIL}"},
    "Id": { "S": "9abafc55-60d2-4635-9277-d6c5224c92b5" },
    "Title": { "S": "Task #2" },
    "Description": { "S": "Do something else" },
    "IsDone": { "BOOL": true },
    "Subtasks": { "L": [] }
  }
  ITEM
}
