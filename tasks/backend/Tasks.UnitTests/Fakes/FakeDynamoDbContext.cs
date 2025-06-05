using System.Diagnostics.CodeAnalysis;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Tasks.Models;

namespace Tasks.UnitTests.Fakes;

public class FakeDynamoDbContext(List<TaskModel> _tasks) : IDynamoDBContext
{
    public IBatchGet<T> CreateBatchGet<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>()
    {
        throw new NotImplementedException();
    }

    public IBatchGet<T> CreateBatchGet<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(DynamoDBOperationConfig operationConfig = null!)
    {
        throw new NotImplementedException();
    }

    public IBatchGet<T> CreateBatchGet<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(BatchGetConfig batchGetConfig)
    {
        throw new NotImplementedException();
    }

    public IBatchWrite<T> CreateBatchWrite<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>()
    {
        throw new NotImplementedException();
    }

    public IBatchWrite<T> CreateBatchWrite<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(DynamoDBOperationConfig operationConfig = null!)
    {
        throw new NotImplementedException();
    }

    public IBatchWrite<object> CreateBatchWrite([DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] Type valuesType)
    {
        throw new NotImplementedException();
    }

    public IBatchWrite<object> CreateBatchWrite([DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] Type valuesType, DynamoDBOperationConfig operationConfig = null!)
    {
        throw new NotImplementedException();
    }

    public IBatchWrite<T> CreateBatchWrite<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(BatchWriteConfig batchWriteConfig)
    {
        throw new NotImplementedException();
    }

    public IBatchWrite<object> CreateBatchWrite([DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] Type valuesType, BatchWriteConfig batchWriteConfig)
    {
        throw new NotImplementedException();
    }

    public IMultiTableBatchGet CreateMultiTableBatchGet(params IBatchGet[] batches)
    {
        throw new NotImplementedException();
    }

    public IMultiTableBatchWrite CreateMultiTableBatchWrite(params IBatchWrite[] batches)
    {
        throw new NotImplementedException();
    }

    public IMultiTableTransactGet CreateMultiTableTransactGet(params ITransactGet[] transactionParts)
    {
        throw new NotImplementedException();
    }

    public IMultiTableTransactWrite CreateMultiTableTransactWrite(params ITransactWrite[] transactionParts)
    {
        throw new NotImplementedException();
    }

    public ITransactGet<T> CreateTransactGet<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>()
    {
        throw new NotImplementedException();
    }

    public ITransactGet<T> CreateTransactGet<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(DynamoDBOperationConfig operationConfig = null!)
    {
        throw new NotImplementedException();
    }

    public ITransactGet<T> CreateTransactGet<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(TransactGetConfig transactGetConfig)
    {
        throw new NotImplementedException();
    }

    public ITransactWrite<T> CreateTransactWrite<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>()
    {
        throw new NotImplementedException();
    }

    public ITransactWrite<T> CreateTransactWrite<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(DynamoDBOperationConfig operationConfig = null!)
    {
        throw new NotImplementedException();
    }

    public ITransactWrite<T> CreateTransactWrite<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(TransactWriteConfig transactWriteConfig)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(T value, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(T value, DynamoDBOperationConfig operationConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(T value, DeleteConfig deleteConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKey, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKey, DynamoDBOperationConfig operationConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKey, DeleteConfig deleteConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKey, object rangeKey, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKey, object rangeKey, DynamoDBOperationConfig operationConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKey, object rangeKey, DeleteConfig deleteConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public void Dispose()
    {
        throw new NotImplementedException();
    }

    public Task ExecuteBatchGetAsync(params IBatchGet[] batches)
    {
        throw new NotImplementedException();
    }

    public Task ExecuteBatchGetAsync(IBatchGet[] batches, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task ExecuteBatchWriteAsync(IBatchWrite[] batches, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task ExecuteTransactGetAsync(ITransactGet[] transactionParts, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task ExecuteTransactWriteAsync(ITransactWrite[] transactionParts, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public T FromDocument<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(Document document)
    {
        throw new NotImplementedException();
    }

    public T FromDocument<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(Document document, DynamoDBOperationConfig operationConfig)
    {
        throw new NotImplementedException();
    }

    public T FromDocument<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(Document document, FromDocumentConfig fromDocumentConfig)
    {
        throw new NotImplementedException();
    }

    public IEnumerable<T> FromDocuments<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(IEnumerable<Document> documents)
    {
        throw new NotImplementedException();
    }

    public IEnumerable<T> FromDocuments<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(IEnumerable<Document> documents, DynamoDBOperationConfig operationConfig)
    {
        throw new NotImplementedException();
    }

    public IEnumerable<T> FromDocuments<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(IEnumerable<Document> documents, FromDocumentConfig fromDocumentConfig)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> FromQueryAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(QueryOperationConfig queryConfig)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> FromQueryAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(QueryOperationConfig queryConfig, DynamoDBOperationConfig operationConfig = null!)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> FromQueryAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(QueryOperationConfig queryConfig, FromQueryConfig fromQueryConfig)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> FromScanAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(ScanOperationConfig scanConfig)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> FromScanAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(ScanOperationConfig scanConfig, DynamoDBOperationConfig operationConfig = null!)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> FromScanAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(ScanOperationConfig scanConfig, FromScanConfig fromScanConfig)
    {
        throw new NotImplementedException();
    }

    public ITable GetTargetTable<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>()
    {
        throw new NotImplementedException();
    }

    public ITable GetTargetTable<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(DynamoDBOperationConfig operationConfig = null!)
    {
        throw new NotImplementedException();
    }

    public ITable GetTargetTable<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(GetTargetTableConfig getTargetTableConfig)
    {
        throw new NotImplementedException();
    }

    public Task<T> LoadAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKey, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<T> LoadAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKey, DynamoDBOperationConfig operationConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<T> LoadAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKey, LoadConfig loadConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<T> LoadAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKey, object rangeKey, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<T> LoadAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKey, object rangeKey, DynamoDBOperationConfig operationConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<T> LoadAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKey, object rangeKey, LoadConfig loadConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<T> LoadAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(T keyObject, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<T> LoadAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(T keyObject, DynamoDBOperationConfig operationConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<T> LoadAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(T keyObject, LoadConfig loadConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> QueryAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKeyValue)
    {
        return (new AsyncSearch<TaskModel>(_tasks.Where(t => t.OwnerEmail == hashKeyValue.ToString()).ToList()) as AsyncSearch<T>)!;
    }

    public IAsyncSearch<T> QueryAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKeyValue, DynamoDBOperationConfig operationConfig = null!)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> QueryAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKeyValue, QueryConfig queryConfig)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> QueryAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKeyValue, QueryOperator op, IEnumerable<object> values)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> QueryAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKeyValue, QueryOperator op, IEnumerable<object> values, DynamoDBOperationConfig operationConfig = null!)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> QueryAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(object hashKeyValue, QueryOperator op, IEnumerable<object> values, QueryConfig queryConfig)
    {
        throw new NotImplementedException();
    }

    public void RegisterTableDefinition(Table table)
    {
        throw new NotImplementedException();
    }

    public Task SaveAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(T value, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task SaveAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(T value, DynamoDBOperationConfig operationConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task SaveAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(T value, SaveConfig saveConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task SaveAsync([DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] Type valueType, object value, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task SaveAsync([DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] Type valueType, object value, DynamoDBOperationConfig operationConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task SaveAsync([DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] Type valueType, object value, SaveConfig saveConfig, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> ScanAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(IEnumerable<ScanCondition> conditions)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> ScanAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(IEnumerable<ScanCondition> conditions, DynamoDBOperationConfig operationConfig = null!)
    {
        throw new NotImplementedException();
    }

    public IAsyncSearch<T> ScanAsync<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(IEnumerable<ScanCondition> conditions, ScanConfig scanConfig)
    {
        throw new NotImplementedException();
    }

    public Document ToDocument<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(T value)
    {
        throw new NotImplementedException();
    }

    public Document ToDocument<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(T value, DynamoDBOperationConfig operationConfig)
    {
        throw new NotImplementedException();
    }

    public Document ToDocument<[DynamicallyAccessedMembers((DynamicallyAccessedMemberTypes)(-1))] T>(T value, ToDocumentConfig toDocumentConfig)
    {
        throw new NotImplementedException();
    }
}
