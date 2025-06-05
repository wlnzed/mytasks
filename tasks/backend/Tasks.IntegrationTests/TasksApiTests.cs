using System.Text.Json;
using Tasks.IntegrationTests.Configuration;
using Tasks.IntegrationTests.Models;

namespace Tasks.IntegrationTests;

public class TasksApiTests
{
    private const string path = "/tasks";

    private readonly HttpClient _client;

    public TasksApiTests()
    {
        var factory = new CustomWebApplicationFactory();
        var client = factory.CreateClient();
        _client = client;
    }

    [Fact]
    public async Task GivenNoUserEmailCookie_WhenGetTasks_ThenNoTasks()
    {
        var expectedTasks = "[]";

        var request = new HttpRequestMessage(HttpMethod.Get, path);
        var response = await _client.SendAsync(request);

        response.EnsureSuccessStatusCode();
        var actualTasks = await response.Content.ReadAsStringAsync();

        Assert.Equal(expectedTasks, actualTasks);

    }

    [Fact]
    public async Task GivenUserWithNoTasksInDatabase_WhenGetTasks_ThenNoTasks()
    {
        var expectedTasks = "[]";

        var request = new HttpRequestMessage(HttpMethod.Get, path);
        request.Headers.Add("Cookie", "user-email=unknown@user.com;");
        var response = await _client.SendAsync(request);

        response.EnsureSuccessStatusCode();
        var actualTasks = await response.Content.ReadAsStringAsync();

        Assert.Equal(expectedTasks, actualTasks);

    }

    [Fact]
    public async Task GivenUserWithTasksInDatabase_WhenGetTasks_ThenTasksForTheUser()
    {
        var ownerEmail = "integration@tests.com";
        var expectedTasks = JsonSerializer.Serialize(new List<TaskJsonModel>()
        {
            new() {
                OwnerEmail = ownerEmail,
                Id = "7a128cce-ac34-4da0-a797-19aabb8f57a8",
                Title = "Task #1",
                Description = "Do something",
                IsDone = false,
                Subtasks = [
                    new() {
                        Title = "Do the first part",
                        IsDone = true
                    },
                    new() {
                        Title = "Do the second part",
                        IsDone = false,
                    }
                ]
            },
            new() {
                OwnerEmail = ownerEmail,
                Id = "9b0f06ce-d687-493a-9272-34f1cbdfeb32",
                Title = "Task #2",
                Description = "Do something else",
                IsDone = true,
                Subtasks = []
            },
        });

        var request = new HttpRequestMessage(HttpMethod.Get, path);
        request.Headers.Add("Cookie", $"user-email={ownerEmail};");
        var response = await _client.SendAsync(request);

        response.EnsureSuccessStatusCode();
        var actualTasks = await response.Content.ReadAsStringAsync();

        Assert.Equal(expectedTasks, actualTasks);
    }
}
