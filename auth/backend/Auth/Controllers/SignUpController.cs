using Microsoft.AspNetCore.Mvc;

namespace Auth.Controllers;

[ApiController]
[Route("sign-up")]
public class SignUpController(ILogger<SignUpController> _logger) : ControllerBase
{
    [HttpPost]
    public void Post([FromBody] SignUpRequest request) =>
        _logger.LogInformation(
            "sign up request has been posted with " +
            $"username \"{request.Username}\", password \"{request.Password}\", " +
            $"and password confirmation \"{request.PasswordConfirmation}\""
        );
}

public record SignUpRequest(string Username, string Password, string PasswordConfirmation);
