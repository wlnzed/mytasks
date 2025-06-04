using System.Collections;
using System.Diagnostics.CodeAnalysis;

public class FakeRequestCookieCollection(string _key, string _value) : IRequestCookieCollection
{
    public string? this[string key] => throw new NotImplementedException();

    public int Count => throw new NotImplementedException();

    public ICollection<string> Keys => throw new NotImplementedException();

    public bool ContainsKey(string key) =>
        throw new NotImplementedException();

    public IEnumerator<KeyValuePair<string, string>> GetEnumerator() =>
        throw new NotImplementedException();

    public bool TryGetValue(string key, [NotNullWhen(true)] out string? value)
    {
        value = _value;
        return key == _key;
    }

    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}
