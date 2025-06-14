using Microsoft.AspNetCore.Mvc;

namespace Auth.Controllers;

[ApiController]
[Route("sign-up")]
public class SignUpController() : ControllerBase
{
    [HttpPost]
    public void Post([FromBody] SignUpRequest request) { }
}

public record SignUpRequest(
    string Email, string Password, string PasswordConfirmation);
