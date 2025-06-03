using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Tasks.Config;
using Tasks.Models;

namespace Tasks.Services;

public class TasksService : ITasksService
{
    private readonly IMongoCollection<TaskModel> _tasksCollection;

    public TasksService(IOptions<DatabaseConfig> databaseConfig) =>
        _tasksCollection = new MongoClient(databaseConfig.Value.ConnectionString)
            .GetDatabase(databaseConfig.Value.DatabaseName)
            .GetCollection<TaskModel>(databaseConfig.Value.CollectionName);

    public List<TaskModel> Get() => _tasksCollection.Find(_ => true).ToList();
}
