using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MyTasksBackend.Models;

public class TaskModel
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("title")]
    public string? Title { get; set; }

    [BsonElement("description")]
    public string? Description { get; set; }

    [BsonElement("isDone")]
    public bool? IsDone { get; set; }

    [BsonElement("subtasks")]
    public IEnumerable<Subtask>? Subtasks { get; set; }
}

public class Subtask
{
    [BsonElement("title")]
    public string? Title { get; set; }

    [BsonElement("isDone")]
    public bool? IsDone { get; set; }
}
