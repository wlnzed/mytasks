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
        var expectedResponseContent = "[]";

        var request = new HttpRequestMessage(HttpMethod.Get, path);
        request.Headers.Add("Cookie", "user-email=new@user.com;");
        var response = await _client.SendAsync(request);

        response.EnsureSuccessStatusCode();
        Assert.Equal(
            expectedResponseContent,
            await response.Content.ReadAsStringAsync());
    }

    [Fact]
    public async Task GivenUserWithTasksInDatabase_WhenGetTasks_ThenTasksForTheUser()
    {
        var expectedResponseContent = "[{\"ownerEmail\":\"integration@tests.c" +
            "om\",\"id\":\"7a128cce-ac34-4da0-a797-19aabb8f57a8\",\"title\":" +
            "\"Task #1\",\"description\":\"Do something\",\"isDone\":false,\"" +
            "subtasks\":[{\"title\":\"Do the first part\",\"isDone\":true},{" +
            "\"title\":\"Do the second part\",\"isDone\":false}]},{\"ownerEma" +
            "il\":\"integration@tests.com\",\"id\":\"9b0f06ce-d687-493a-9272-" +
            "34f1cbdfeb32\",\"title\":\"Task #2\",\"description\":\"Do someth" +
            "ing else\",\"isDone\":true,\"subtasks\":[]}]";

        var request = new HttpRequestMessage(HttpMethod.Get, path);
        request.Headers.Add("Cookie", "user-email=integration@tests.com;");
        var response = await _client.SendAsync(request);

        response.EnsureSuccessStatusCode();
        Assert.Equal(
            expectedResponseContent,
            await response.Content.ReadAsStringAsync());
    }
}
