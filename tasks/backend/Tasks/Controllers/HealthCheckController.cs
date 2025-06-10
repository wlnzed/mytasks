using Microsoft.AspNetCore.Mvc;

namespace Tasks.Controllers;

[ApiController]
[Route("health-check")]
public class HealthCheckController() : ControllerBase
{
    [HttpGet]
    public string Get() => "Tasks backend is up and running.";
}
