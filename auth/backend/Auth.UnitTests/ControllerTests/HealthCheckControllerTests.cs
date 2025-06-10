using Auth.Controllers;

namespace Auth.UnitTests.ControllerTests;

public class HealthCheckControllerTests
{
    [Fact]
    public void WhenGetHealthCheck_ThenHealthyMessage()
    {
        const string expectedResponse = "Auth backend is up and running.";
        var sut = new HealthCheckController();
        var actualResponse = sut.Get();
        Assert.Equal(expectedResponse, actualResponse);
    }
}
