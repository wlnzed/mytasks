using System.Text.Json.Serialization;

namespace Tasks.IntegrationTests.Models;

public class TaskJsonModel
{
    [JsonPropertyName("ownerEmail")]
    public string? OwnerEmail { get; set; }

    [JsonPropertyName("id")]
    public string? Id { get; set; }

    [JsonPropertyName("title")]
    public string? Title { get; set; }

    [JsonPropertyName("description")]
    public string? Description { get; set; }

    [JsonPropertyName("isDone")]
    public bool? IsDone { get; set; }

    [JsonPropertyName("subtasks")]
    public SubtaskJson[]? Subtasks { get; set; }
}

public class SubtaskJson
{
    [JsonPropertyName("title")]
    public string? Title { get; set; }

    [JsonPropertyName("isDone")]
    public bool? IsDone { get; set; }
}
