using System.Collections;
using System.Diagnostics.CodeAnalysis;

public class FakeRequestCookieCollection : IRequestCookieCollection
{
    private readonly string _key;

    private readonly string _value;

    public FakeRequestCookieCollection(string key, string value)
    {
        _key = key;
        _value = value;
    }

    public string? this[string key] => throw new NotImplementedException();

    public int Count => throw new NotImplementedException();

    public ICollection<string> Keys => throw new NotImplementedException();

    public bool ContainsKey(string key)
    {
        throw new NotImplementedException();
    }

    public IEnumerator<KeyValuePair<string, string>> GetEnumerator()
    {
        throw new NotImplementedException();
    }

    public bool TryGetValue(string key, [NotNullWhen(true)] out string? value)
    {
        if (key == _key)
        {
            value = "user@email.com";
            return true;
        }
        else
        {
            value = "";
            return false;
        }
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
