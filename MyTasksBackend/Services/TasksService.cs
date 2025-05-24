using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MyTasksBackend.Config;
using MyTasksBackend.Models;

namespace MyTasksBackend.Services;

public class TasksService : ITasksService
{
    private readonly IMongoCollection<TaskModel> _tasksCollection;

    public TasksService(IOptions<DatabaseConfig> databaseConfig) =>
        _tasksCollection = new MongoClient(databaseConfig.Value.ConnectionString)
            .GetDatabase(databaseConfig.Value.DatabaseName)
            .GetCollection<TaskModel>(databaseConfig.Value.CollectionName);

    public List<TaskModel> Get() => _tasksCollection.Find(_ => true).ToList();
}
