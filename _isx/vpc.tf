resource "aws_vpc" "mytasks" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "${var.ENV}-mytasks"
  }
}

resource "aws_subnet" "mytasks_private" {
  vpc_id     = aws_vpc.mytasks.id
  cidr_block = "10.0.1.0/24"
}

resource "aws_subnet" "mytasks_public" {
  vpc_id                  = aws_vpc.mytasks.id
  cidr_block              = "10.0.2.0/24"
  map_public_ip_on_launch = true
}

resource "aws_internet_gateway" "mytasks" {
  vpc_id = aws_vpc.mytasks.id
}

resource "aws_route_table" "mytasks" {
  vpc_id = aws_vpc.mytasks.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.mytasks.id
  }
}

resource "aws_route_table_association" "mytasks" {
  subnet_id      = aws_subnet.mytasks_public.id
  route_table_id = aws_route_table.mytasks.id
}
