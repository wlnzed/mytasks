using Microsoft.AspNetCore.Mvc;
using MyTasksBackend.Models;
using MyTasksBackend.Services;

namespace MyTasksBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class TasksController(ITasksService _tasksService) : ControllerBase
{
    // TODO: retrieve and return tasks from a database
    [HttpGet(Name = "GetTasks")]
    public IEnumerable<TaskModel> Get() => _tasksService.Get();
}
