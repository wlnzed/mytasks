resource "aws_cognito_user_pool" "mytasks" {
  name                = "stg-mytasks"
  username_attributes = ["email"]

  username_configuration {
    case_sensitive = false
  }

  schema {
    name                = "email"
    attribute_data_type = "String"
    mutable             = true
    required            = true

    string_attribute_constraints {
      min_length = 5
      max_length = 2048
    }
  }
}
