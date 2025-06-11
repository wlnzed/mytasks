resource "aws_ecs_cluster" "mytasks" {
  name = "${var.ENV}-mytasks"
}

resource "aws_ecs_task_definition" "mytasks_auth" {
  family = "${var.ENV}-mytasks-auth"
  container_definitions = templatefile("task_definition.json", {
    app_name = "auth",
    prefix   = var.ENV
  })
  requires_compatibilities = ["EC2"]
  network_mode             = "awsvpc"
}

resource "aws_ecs_service" "mytasks_auth" {
  name            = "${var.ENV}-mytasks-auth"
  cluster         = aws_ecs_cluster.mytasks.id
  desired_count   = 1
  launch_type     = "EC2"
  task_definition = aws_ecs_task_definition.mytasks_auth.arn

  network_configuration {
    subnets = [aws_subnet.mytasks_private.id]
  }
}

resource "aws_ecs_task_definition" "mytasks_tasks" {
  family = "${var.ENV}-mytasks-tasks"
  container_definitions = templatefile("task_definition.json", {
    app_name = "tasks",
    prefix   = var.ENV
  })
  requires_compatibilities = ["EC2"]
  network_mode             = "awsvpc"
}

resource "aws_ecs_service" "mytasks_tasks" {
  name            = "${var.ENV}-mytasks-tasks"
  cluster         = aws_ecs_cluster.mytasks.id
  desired_count   = 1
  launch_type     = "EC2"
  task_definition = aws_ecs_task_definition.mytasks_tasks.arn

  network_configuration {
    subnets = [aws_subnet.mytasks_private.id]
  }
}
