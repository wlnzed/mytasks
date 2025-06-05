using Amazon.DynamoDBv2.DataModel;

namespace Tasks.Models;

[DynamoDBTable("mytasks-tasks-dev")]
public class TaskModel
{
    [DynamoDBHashKey]
    public string? OwnerEmail { get; set; }

    [DynamoDBRangeKey]
    public string? Id { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public bool? IsDone { get; set; }

    public Subtask[]? Subtasks { get; set; }
}

public class Subtask
{
    public string? Title { get; set; }

    public bool? IsDone { get; set; }
}
