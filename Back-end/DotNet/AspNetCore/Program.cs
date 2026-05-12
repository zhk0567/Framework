var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://127.0.0.1:3080");

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet(
    "/api/health",
    () =>
        Results.Json(
            new Dictionary<string, object> { ["ok"] = true, ["service"] = "framework-back-end-aspnetcore" }));

app.MapGet(
    "/api/info",
    () =>
        Results.Json(
            new Dictionary<string, object>
            {
                ["message"] = "ASP.NET Core：Microsoft 跨平台 Web 栈，Minimal API 与 MVC 二选一或混用。",
                ["highlights"] = new object[]
                {
                    new Dictionary<string, string>
                    {
                        ["title"] = "Minimal API",
                        ["detail"] = "端点即委托，轻量 JSON 与 OpenAPI 集成常见。",
                    },
                    new Dictionary<string, string>
                    {
                        ["title"] = "与 Spring Boot 对照",
                        ["detail"] = "均为企业向运行时；C# 异步与中间件管道写法不同。",
                    },
                },
            }));

app.Run();
