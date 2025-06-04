using Microsoft.AspNetCore.Mvc;

namespace Auth.Controllers;

[ApiController]
[Route("[controller]")]
public class SignUpController(ILogger<SignUpController> _logger) : ControllerBase
{
    [HttpPost(Name = "PostSignUp")]
    public void Post() =>
        _logger.LogInformation("sign up request has been posted");
}
