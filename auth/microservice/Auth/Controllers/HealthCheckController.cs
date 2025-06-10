using Microsoft.AspNetCore.Mvc;

namespace Auth.Controllers;

[ApiController]
[Route("health-check")]
public class HealthCheckController() : ControllerBase
{
    [HttpGet]
    public string Get() => "Auth microservice is up and running.";
}
