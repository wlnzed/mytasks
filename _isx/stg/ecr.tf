resource "aws_ecr_repository" "mytasks" {
  name                 = "stg-mytasks"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

