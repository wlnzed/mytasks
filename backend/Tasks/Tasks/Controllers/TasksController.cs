using Microsoft.AspNetCore.Mvc;
using Tasks.Models;
using Tasks.Services;

namespace Tasks.Controllers;

[ApiController]
[Route("[controller]")]
public class TasksController(ITasksService _tasksService) : ControllerBase
{
    // TODO: retrieve and return tasks from a database
    [HttpGet(Name = "GetTasks")]
    public IEnumerable<TaskModel> Get() => _tasksService.Get();
}
