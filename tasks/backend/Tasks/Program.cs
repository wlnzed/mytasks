using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;

var builder = WebApplication.CreateBuilder(args);

var awsOptions = builder.Configuration.GetAWSOptions();
builder.Services.AddDefaultAWSOptions(awsOptions);
builder.Services.AddAWSService<IAmazonDynamoDB>();
builder.Services.AddScoped<IDynamoDBContext, DynamoDBContext>();

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var localCorsPolicyName = "localdev";

builder.Services.AddCors(options =>
    options.AddPolicy(localCorsPolicyName, policy =>
        policy.WithOrigins(
            builder.Configuration.GetValue<string>("FrontendShellUrl")!,
            builder.Configuration.GetValue<string>("TasksMfeUrl")!
        ).AllowCredentials()
    )
);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseCors(localCorsPolicyName);
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
