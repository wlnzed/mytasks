using Auth.Controllers;

namespace Auth.UnitTests.ControllerTests;

public class HealthCheckControllerTests
{
    [Fact]
    public void WhenGetHealthCheck_ThenHealthyMessage()
    {
        const string expectedResult = "Auth microservice is up and running.";
        var sut = new HealthCheckController();
        var result = sut.Get();
        Assert.Equal(expectedResult, result);
    }
}
