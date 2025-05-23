var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var localCorsPolicyName = "localdev";

builder.Services.AddCors(options =>
{
    options.AddPolicy(localCorsPolicyName, policy =>
    {
        policy.WithOrigins("http://localhost:5173");
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseCors(localCorsPolicyName);
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
