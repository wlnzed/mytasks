using Microsoft.AspNetCore.Mvc;

namespace Auth.Controllers;

[ApiController]
[Route("sign-in")]
public class SignInController() : ControllerBase
{
    [HttpPost]
    public void Post() { }
}
