using Tasks.Services;
using Tasks.Controllers;
using Tasks.UnitTests.Fakes;
using Microsoft.AspNetCore.Mvc.Testing;

namespace Tasks.UnitTests.Controllers;

public class TasksControllerTests
{
    private ITasksService _fakeTasksService;
    private TasksController _sut;

    public TasksControllerTests()
    {
        _fakeTasksService = new FakeTasksService();
        _sut = new TasksController(_fakeTasksService);
    }

    [Fact]
    public void TestGet()
    {
        var tasks = _sut.Get();
    }
}
