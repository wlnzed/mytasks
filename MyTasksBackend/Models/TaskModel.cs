namespace MyTasksBackend.Models;

public class TaskModel
{
    public required string Title { get; set; }
    
    public required string Description { get; set; }

    public required bool Done { get; set; }

    public required SubtaskModel[] Subtasks { get; set; }
}
