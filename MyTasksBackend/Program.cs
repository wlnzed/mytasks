using MyTasksBackend.Config;
using MyTasksBackend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var localCorsPolicyName = "localdev";

builder.Services.AddCors(options =>
    options.AddPolicy(localCorsPolicyName, policy =>
        policy.WithOrigins(builder.Configuration.GetValue<string>("FrontendUrl")!)
    )
);

builder.Services.Configure<DatabaseConfig>(
    builder.Configuration.GetSection("Database"));

builder.Services.AddSingleton<ITasksService, TasksService>();

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
