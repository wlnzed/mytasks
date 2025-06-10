namespace Tasks.IntegrationTests.ApiTests;

public class HealthCheckApiTests
{
    [Fact]
    public async Task WhenHealthCheck_ThenHealthyMessage()
    {
        const string path = "/health-check";
        const string expectedContent = "Tasks backend is up and running.";

        var factory = new CustomWebApplicationFactory();
        var client = factory.CreateClient();
        var response = await client.GetAsync(path);

        response.EnsureSuccessStatusCode();
        Assert.Equal(
            expectedContent, await response.Content.ReadAsStringAsync());
    }
}

