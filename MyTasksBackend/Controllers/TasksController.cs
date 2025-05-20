using Microsoft.AspNetCore.Mvc;
using MyTasksBackend.Models;

namespace MyTasksBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class TasksController(ILogger<TasksController> _logger) : ControllerBase
{
    private static readonly IEnumerable<TaskModel> Tasks = [
        new()
        {
            Title = "Task #1",
            Description = "The first task",
            Done = true,
            Subtasks = [],
        },
        new()
        {
            Title = "Task #2",
            Description = "The second task",
            Done = false,
            Subtasks = [
                new() {
                    Title = "Subtask #1",
                    Done = false,
                },
                new() {
                    Title = "Subtask #2",
                    Done = true,
                }
            ]
        }
    ];

    [HttpGet(Name = "GetTasks")]
    public IEnumerable<TaskModel> Get() 
    {
        _logger.Log(LogLevel.Information, new EventId(), "returning tasks...");
        return Tasks;
    }
}
