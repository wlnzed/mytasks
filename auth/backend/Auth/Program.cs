var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var localCorsPolicyName = "localdev";

builder.Services.AddCors(options =>
    options.AddPolicy(localCorsPolicyName, policy =>
        policy.WithOrigins(
            builder.Configuration.GetValue<string>("FrontendShellUrl")!,
            builder.Configuration.GetValue<string>("AuthMfeUrl")!
        ).AllowAnyHeader()
    )
);

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
