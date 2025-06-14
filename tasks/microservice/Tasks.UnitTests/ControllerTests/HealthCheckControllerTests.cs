using Tasks.Controllers;

public class HealthCheckControllerTests
{
    [Fact]
    public void WhenHealthChekc_ThenHealthyMessage()
    {
        var expectedResult = "Tasks microservice is up and running.";
        var sut = new HealthCheckController();
        var result = sut.Get();
        Assert.Equal(expectedResult, result);
    }
}
