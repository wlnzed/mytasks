resource "aws_ecs_cluster" "mytasks" {
  name = "prod-mytasks"
}

resource "aws_ecs_task_definition" "mytasks_auth" {
  family = "prod-mytasks-auth"
  container_definitions = templatefile("task_definition.json", {
    app_name = "auth",
    prefix   = "prod"
  })
  requires_compatibilities = ["EC2"]
  network_mode             = "awsvpc"
}

resource "aws_ecs_service" "mytasks_auth" {
  name            = "prod-mytasks-auth"
  cluster         = aws_ecs_cluster.mytasks.id
  desired_count   = 1
  launch_type     = "EC2"
  task_definition = aws_ecs_task_definition.mytasks_auth.arn

  network_configuration {
    subnets = [aws_subnet.mytasks_private.id]
  }
}

resource "aws_ecs_task_definition" "mytasks_tasks" {
  family = "prod-mytasks-tasks"
  container_definitions = templatefile("task_definition.json", {
    app_name = "tasks",
    prefix   = "prod"
  })
  requires_compatibilities = ["EC2"]
  network_mode             = "awsvpc"
}

resource "aws_ecs_service" "mytasks_tasks" {
  name            = "prod-mytasks-tasks"
  cluster         = aws_ecs_cluster.mytasks.id
  desired_count   = 1
  launch_type     = "EC2"
  task_definition = aws_ecs_task_definition.mytasks_tasks.arn

  network_configuration {
    subnets = [aws_subnet.mytasks_private.id]
  }
}
