using Tasks.Services;
using Tasks.Models;

namespace Tasks.UnitTests.Fakes;

public class FakeTasksService : ITasksService
{
    public List<TaskModel> Get() => [
        new()
        {
            Title = "Task #1",
            Description = "Do a thing!",
            IsDone = false,
            Subtasks = [
                new() {
                    Title = "Do the first part",
                    IsDone = true
                },
                new() {
                    Title = "Do the second part",
                    IsDone = false
                }
            ]
        },
        new()
        {
            Title = "Task #2",
            Description = "Do another thing!",
            IsDone = true,
            Subtasks = []
        }
    ];
}

