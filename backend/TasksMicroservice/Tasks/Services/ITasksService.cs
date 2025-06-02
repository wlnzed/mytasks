using Tasks.Models;

namespace Tasks.Services;

public interface ITasksService
{
    List<TaskModel> Get();
}
