using Microsoft.AspNetCore.Mvc.Testing;

namespace Tasks.IntegrationTests;

public class CustomWebApplicationFactory : WebApplicationFactory<Program>
{
    protected override IHost CreateHost(IHostBuilder builder)
    {
        builder.ConfigureAppConfiguration(config =>
        {
            config.AddInMemoryCollection(new Dictionary<string, string?>
            {
                {"DynamoDbTablePrefix", "itest-"}
            });
        });

        return base.CreateHost(builder);
    }
}

