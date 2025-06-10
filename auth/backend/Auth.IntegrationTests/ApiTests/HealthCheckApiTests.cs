using Microsoft.AspNetCore.Mvc.Testing;

namespace Auth.IntegrationTests.ApiTests;

public class HealthCheckApiTests()
{
    [Fact]
    public async Task WhenHealthCheck_ThenHealthyMessage()
    {
        const string path = "/health-check";
        const string expectedMessage = "Auth backend is up and running.";

        var factory = new WebApplicationFactory<Program>();
        var client = factory.CreateClient();
        var response = await client.GetAsync(path);

        response.EnsureSuccessStatusCode();
        Assert.Equal(
            expectedMessage, await response.Content.ReadAsStringAsync());
    }
}
