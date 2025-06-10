using Amazon.DynamoDBv2.DataModel;

public class AsyncSearch<T>(List<T> _results) : IAsyncSearch<T>
{
    public bool IsDone => throw new NotImplementedException();

    public string PaginationToken => throw new NotImplementedException();

    public Task<List<T>> GetNextSetAsync(CancellationToken cancellationToken = default) =>
        Task.Run(() => _results);

    public Task<List<T>> GetRemainingAsync(CancellationToken cancellationToken = default) =>
        throw new NotImplementedException();
}
