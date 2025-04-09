using Microsoft.AspNetCore.Mvc;

namespace bff.Controllers;

[ApiController]
[Route("[controller]")]
public class SampleController : ControllerBase
{
    private static readonly string Key = "123456";
    private readonly ILogger<SampleController> _logger;

    public SampleController(ILogger<SampleController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public SampleResponseModel GetSomething([FromQuery] string key)
    {
        return new SampleResponseModel
        {
            Key = key,
            IsMatched = key == Key,
            CurrentTime = DateTime.Now
        };
    }
}
