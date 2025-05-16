using Microsoft.AspNetCore.Mvc;
using MyTasksBackend.Models;

namespace MyTasksBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class TasksController : ControllerBase
{
    private static readonly TaskModel[] Tasks = new[]
    {
        new TaskModel 
        {
            Title = "Task #1",
            Done = true,
            Subtasks = new SubtaskModel[] {},
        },
        new TaskModel 
        {
            Title = "Task #1",
            Done = false,
            Subtasks = new SubtaskModel[] 
            {
                new SubtaskModel {
                    Title = "Subtask #1",
                    Done = false,
                },
                new SubtaskModel {
                    Title = "Subtask #2",
                    Done = true,
                }
            }
        }
    };

    private readonly ILogger<TasksController> _logger;

    public TasksController(ILogger<TasksController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetTasks")]
    public IEnumerable<TaskModel> Get() => Tasks;
}
