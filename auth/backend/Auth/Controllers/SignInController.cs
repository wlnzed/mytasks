using Microsoft.AspNetCore.Mvc;

namespace Auth.Controllers;

[ApiController]
[Route("[controller]")]
public class SignInController(ILogger<SignInController> _logger) : ControllerBase
{
    [HttpPost(Name = "PostSignIn")]
    public void Post() =>
        _logger.LogInformation("sign in request has been posted");
}
