resource "aws_ecr_repository" "mytasks" {
  name                 = "prod-mytasks"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

