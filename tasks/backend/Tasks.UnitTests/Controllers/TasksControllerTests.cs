using Tasks.Controllers;
using Tasks.UnitTests.Fakes;
using Amazon.DynamoDBv2.DataModel;

namespace Tasks.UnitTests.Controllers;

public class TasksControllerTests
{
    private IDynamoDBContext _fakeDbContext;
    private TasksController _sut;

    public TasksControllerTests()
    {
        _fakeDbContext = new FakeDynamoDbContext();
        _sut = new TasksController(_fakeDbContext);
    }

    [Fact]
    public void TestGet()
    {
        var tasks = _sut.Get();
    }
}
