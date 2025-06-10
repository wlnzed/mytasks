using Tasks.Controllers;

public class HealthCheckControllerTests
{
    [Fact]
    public void WhenHealthChekc_ThenHealthyMessage()
    {
        var expectedResponse = "Tasks backend is up and running.";
        var sut = new HealthCheckController();
        var actualResponse = sut.Get();
        Assert.Equal(expectedResponse, actualResponse);
    }
}
