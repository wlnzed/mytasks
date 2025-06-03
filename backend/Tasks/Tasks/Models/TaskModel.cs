using Amazon.DynamoDBv2.DataModel;

namespace Tasks.Models;

[DynamoDBTable("mytasks-tasks-dev")]
public class TaskModel
{
    [DynamoDBHashKey("OwnerEmail")]
    public string? OwnerEmail { get; set; }

    [DynamoDBRangeKey("Id")]
    public string? Id { get; set; }

    [DynamoDBProperty("Title")]
    public string? Title { get; set; }

    [DynamoDBProperty("Description")]
    public string? Description { get; set; }

    [DynamoDBProperty("IsDone")]
    public bool? IsDone { get; set; }

    [DynamoDBProperty("Subtasks")]
    public Subtask[]? Subtasks { get; set; }
}

public class Subtask
{
    [DynamoDBProperty("Title")]
    public string? Title { get; set; }

    [DynamoDBProperty("IsDone")]
    public bool? IsDone { get; set; }
}
