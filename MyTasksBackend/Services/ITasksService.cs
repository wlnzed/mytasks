using MyTasksBackend.Models;

namespace MyTasksBackend.Services;

public interface ITasksService
{
    List<TaskModel> Get();
}
