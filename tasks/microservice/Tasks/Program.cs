using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;

var builder = WebApplication.CreateBuilder(args);

var awsOptions = builder.Configuration.GetAWSOptions();
builder.Services.AddDefaultAWSOptions(awsOptions);
builder.Services.AddAWSService<IAmazonDynamoDB>();
builder.Services.AddScoped<IDynamoDBContext>((provider) =>
{
    var contextBuilder = new DynamoDBContextBuilder();
    contextBuilder.ConfigureContext((config) =>
    {
        config.TableNamePrefix = builder.Configuration.GetValue<string>("DynamoDbTablePrefix")!;
    });
    return contextBuilder.Build();
});

builder.Services.AddControllers();
builder.Services.AddOpenApi();

const string corsPolicyName = "tasks-microservice-cors-policy";

builder.Services.AddCors(options =>
    options.AddPolicy(corsPolicyName, policy =>
        policy.WithOrigins(
            builder.Configuration.GetValue<string>("FrontendShellUrl")!,
            builder.Configuration.GetValue<string>("TasksMfeUrl")!
        ).AllowCredentials()
    )
);

var app = builder.Build();

if (app.Environment.IsDevelopment()) app.MapOpenApi();

app.UseCors(corsPolicyName);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

public partial class Program { }
