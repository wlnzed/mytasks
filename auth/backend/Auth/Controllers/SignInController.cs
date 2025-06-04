using Microsoft.AspNetCore.Mvc;

namespace Auth.Controllers;

[ApiController]
[Route("sign-up")]
public class SignInController(ILogger<SignInController> _logger) : ControllerBase
{
    [HttpPost]
    public void Post() =>
        _logger.LogInformation("sign in request has been posted");
}
