using System.Net;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Tasks.Controllers;
using Tasks.Models;
using Tasks.UnitTests.Fakes;

namespace Tasks.UnitTests.Controllers;

public class TasksControllerTests
{
    private readonly TasksController _sut;

    public TasksControllerTests()
    {
        _sut = new TasksController(new FakeDynamoDbContext());
        _sut.ControllerContext = new ControllerContext();
        _sut.ControllerContext.HttpContext = new DefaultHttpContext();
    }

    [Fact]
    public async Task GivenNoUserEmail_WhenGetTasks_ThenUnauthorizedAndEmptyArray()
    {
        var response = await _sut.Get();

        Assert.IsType<UnauthorizedResult>(response.Result);
        Assert.Null(response.Value);
    }

    [Fact]
    public async Task GivenUserEmail_WhenGetTasks_ThenTasksForUserEmail()
    {
        var ownerEmail = "user@email.com";
        List<TaskModel> expectedTasks =
        [
            new() {
                OwnerEmail = ownerEmail,
                Id = "470ea1ac-dd69-4326-bf2a-697d679b30ab",
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
                Id = "5ad6a5fc-e3a3-4bd2-a22b-0788370ee435",
                Title = "Task #2",
                Description = "Do something else",
                IsDone = true,
                Subtasks = []
            },
        ];

        var cookies = new FakeRequestCookieCollection("user-email", ownerEmail);
        var cookiesFeature = new RequestCookiesFeature(cookies);
        var features = new FeatureCollection();
        features.Set<IRequestCookiesFeature>(cookiesFeature);
        var context = new DefaultHttpContext(features);
        _sut.ControllerContext = new ControllerContext();
        _sut.ControllerContext.HttpContext = context;

        var response = await _sut.Get();

        var okObjectResult = Assert.IsType<OkObjectResult>(response.Result);
        var actualTasks = okObjectResult.Value! as List<TaskModel>;
        Assert.Equal(expectedTasks.Count(), actualTasks!.Count());
        for (var i = 0; i < expectedTasks.Count(); i++)
            Assert.Equivalent(expectedTasks[i], actualTasks![i]);
    }
}

