resource "aws_instance" "mytasks_auth" {
  ami           = "ami-0bc8d5c547360e648"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.mytasks_private.id
  user_data = templatefile("user_data.tftpl", {
    ecs_cluster_name = aws_ecs_cluster.mytasks.name
  })
}

resource "aws_instance" "mytasks_tasks" {
  ami           = "ami-0bc8d5c547360e648"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.mytasks_private.id
  user_data = templatefile("user_data.tftpl", {
    ecs_cluster_name = aws_ecs_cluster.mytasks.name
  })
}
