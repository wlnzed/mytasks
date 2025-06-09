resource "aws_ecs_cluster" "mytasks" {
  name = "mytasks"
}

resource "aws_ecs_task_definition" "mytasks_auth" {
  family                   = "mytasks-auth"
  container_definitions    = templatefile("task_definition.json", { app_name = "auth" })
  requires_compatibilities = ["EC2"]
}

resource "aws_ecs_service" "mytasks_auth" {
  name            = "mytasks-auth"
  cluster         = aws_ecs_cluster.mytasks.id
  desired_count   = 1
  launch_type     = "EC2"
  task_definition = aws_ecs_task_definition.mytasks_auth.arn
}

resource "aws_ecs_task_definition" "mytasks_tasks" {
  family                   = "mytasks-tasks"
  container_definitions    = templatefile("task_definition.json", { app_name = "tasks" })
  requires_compatibilities = ["EC2"]
}

resource "aws_ecs_service" "mytasks_tasks" {
  name            = "mytasks-tasks"
  cluster         = aws_ecs_cluster.mytasks.id
  desired_count   = 1
  launch_type     = "EC2"
  task_definition = aws_ecs_task_definition.mytasks_tasks.arn
}
