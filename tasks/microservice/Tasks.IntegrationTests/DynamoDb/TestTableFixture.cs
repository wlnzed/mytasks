using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;

namespace Tasks.IntegrationTests.Db;

public class TestTableFixture : IDisposable
{
    private const string tableName = "itest-mytasks-tasks";
    private readonly AmazonDynamoDBClient _client;

    public TestTableFixture()
    {
        _client = new AmazonDynamoDBClient();

        Task.Run(() => DeleteTableIfExists()).Wait();
        Task.Run(() => CreateTable()).Wait();
        Task.Run(() => AddTestItemsToTable()).Wait();
    }

    public void Dispose()
    {
        Task.Run(() => DeleteTableIfExists()).Wait();
    }

    private async Task CreateTable()
    {
        var createResponse = await _client.CreateTableAsync(
            new CreateTableRequest
            {
                TableName = tableName,
                AttributeDefinitions =
                [
                    new() { AttributeType = "S", AttributeName = "OwnerEmail"},
                    new() { AttributeType = "S", AttributeName = "Id"}
                ],
                KeySchema =
                [
                    new() { KeyType = "HASH", AttributeName = "OwnerEmail"},
                    new() { KeyType = "RANGE", AttributeName = "Id"},
                ],
                BillingMode = "PAY_PER_REQUEST"
            });

        var status = createResponse.TableDescription.TableStatus;
        while (status != "ACTIVE")
        {
            Thread.Sleep(1000);
            var describeResponse = await _client.DescribeTableAsync(
                new DescribeTableRequest() { TableName = tableName });
            status = describeResponse.Table.TableStatus;
        }
    }

    private async Task AddTestItemsToTable()
    {
        await _client.PutItemAsync(tableName, new()
        {
            ["OwnerEmail"] = new() { S = "integration@tests.com" },
            ["Id"] = new() { S = "7a128cce-ac34-4da0-a797-19aabb8f57a8" },
            ["Title"] = new() { S = "Task #1" },
            ["Description"] = new() { S = "Do something" },
            ["IsDone"] = new() { BOOL = false },
            ["Subtasks"] = new()
            {
                L =
                [
                    new() { M = new()
                    {
                        ["Id"] = new() { S = "cfa90295-a1aa-47e6-b068-2fd46b996283"},
                        ["Title"] = new() { S = "Do the first part" },
                        ["IsDone"] = new() { BOOL = true }
                    }},
                    new() { M = new()
                    {
                        ["Id"] = new() { S = "2e35f9ab-16a0-4f3f-9433-0eafaa70753e"},
                        ["Title"] = new() { S = "Do the second part" },
                        ["IsDone"] = new() { BOOL = false }
                    }}
                ]
            },
        });

        await _client.PutItemAsync(tableName, new()
        {
            ["OwnerEmail"] = new() { S = "integration@tests.com" },
            ["Id"] = new() { S = "9b0f06ce-d687-493a-9272-34f1cbdfeb32" },
            ["Title"] = new() { S = "Task #2" },
            ["Description"] = new() { S = "Do something else" },
            ["IsDone"] = new() { BOOL = true },
            ["Subtasks"] = new() { L = [] }
        });
    }


    private async Task DeleteTableIfExists()
    {
        try
        {
            var deleteResponse = await _client.DeleteTableAsync(
                new DeleteTableRequest() { TableName = tableName });

            var status = deleteResponse.TableDescription.TableStatus;
            while (status == "DELETING")
            {
                Thread.Sleep(1000);
                var describeResponse = await _client.DescribeTableAsync(
                    new DescribeTableRequest() { TableName = tableName });
                status = describeResponse.Table.TableStatus;
            }
        }
        catch (ResourceNotFoundException)
        {
            // all good
        }
    }
}
