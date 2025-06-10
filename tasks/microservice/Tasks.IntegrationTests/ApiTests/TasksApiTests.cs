using System.Net;

namespace Tasks.IntegrationTests.ApiTests;

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
    public async Task GivenNoUserEmailCookie_WhenGetTasks_ThenUnauthorized()
    {
        var response = await _client.GetAsync(path);
        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    }

    [Fact]
    public async Task GivenUserWithNoTasksInDatabase_WhenGetTasks_ThenNoTasks()
    {
        var expectedContent = "[]";

        var request = new HttpRequestMessage(HttpMethod.Get, path);
        request.Headers.Add("Cookie", "user-email=new@user.com;");
        var response = await _client.SendAsync(request);

        response.EnsureSuccessStatusCode();
        Assert.Equal(
            expectedContent,
            await response.Content.ReadAsStringAsync());
    }

    [Fact]
    public async Task GivenUserWithTasksInDatabase_WhenGetTasks_ThenTasksForTheUser()
    {
        var expectedContent = "[{\"ownerEmail\":\"integration@tests.c" +
            "om\",\"id\":\"7a128cce-ac34-4da0-a797-19aabb8f57a8\",\"title\":" +
            "\"Task #1\",\"description\":\"Do something\",\"isDone\":false,\"" +
            "subtasks\":[{\"id\":\"cfa90295-a1aa-47e6-b068-2fd46b996283\",\"t" +
            "itle\":\"Do the first part\",\"isDone\":true},{\"id\":\"2e35f9ab" +
            "-16a0-4f3f-9433-0eafaa70753e\",\"title\":\"Do the second part\"," +
            "\"isDone\":false}]},{\"ownerEmail\":\"integration@tests.com\",\"" +
            "id\":\"9b0f06ce-d687-493a-9272-34f1cbdfeb32\",\"title\":\"Task #" +
            "2\",\"description\":\"Do something else\",\"isDone\":true,\"subt" +
            "asks\":[]}]";

        var request = new HttpRequestMessage(HttpMethod.Get, path);
        request.Headers.Add("Cookie", "user-email=integration@tests.com;");
        var response = await _client.SendAsync(request);

        response.EnsureSuccessStatusCode();
        Assert.Equal(expectedContent, await response.Content.ReadAsStringAsync());
    }
}
