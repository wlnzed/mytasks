using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Tasks.Controllers;
using Tasks.Models;
using Tasks.UnitTests.Fakes;

namespace Tasks.UnitTests.Controllers;

public class TasksControllerTests
{
    [Fact]
    public async Task GivenNoUserEmail_WhenGetTasks_ThenEmptyArrayOfTasks()
    {
        var fakeDbContext = new FakeDynamoDbContext([]);
        var httpContext = new DefaultHttpContext();
        var sut = new TasksController(fakeDbContext);
        sut.ControllerContext = new ControllerContext();
        sut.ControllerContext.HttpContext = new DefaultHttpContext();

        var tasks = await sut.Get();
        Assert.Equal(tasks, []);
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

        var fakeDbContext = new FakeDynamoDbContext(expectedTasks);
        var httpContext = new DefaultHttpContext();
        var sut = new TasksController(fakeDbContext);

        var cookies = new FakeRequestCookieCollection("user-email", ownerEmail);
        var cookiesFeature = new RequestCookiesFeature(cookies);
        var features = new FeatureCollection();
        features.Set<IRequestCookiesFeature>(cookiesFeature);
        var context = new DefaultHttpContext(features);

        sut.ControllerContext = new ControllerContext();
        sut.ControllerContext.HttpContext = context;

        var actualTasks = await sut.Get();

        Assert.Equal(expectedTasks, actualTasks);
    }
}

