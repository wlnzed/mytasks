using Amazon.DynamoDBv2.DataModel;
using Microsoft.AspNetCore.Mvc;
using Tasks.Models;

namespace Tasks.Controllers;

[ApiController]
[Route("[controller]")]
public class TasksController(IDynamoDBContext _dbContext) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<TaskModel>>> Get()
    {
        string? ownerEmail;
        var foundUserEmailCookie = Request.Cookies.TryGetValue("user-email", out ownerEmail);
        if (!foundUserEmailCookie) return Unauthorized();
        var tasks = await _dbContext.QueryAsync<TaskModel>(ownerEmail).GetNextSetAsync();
        return Ok(tasks);
    }
}
