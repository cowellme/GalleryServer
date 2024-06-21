using Microsoft.AspNetCore.Mvc;

namespace GalleryServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetUsers()
        {
            var response = new[]
            {
                "1", "2", "3", "4", "5"
            };
            return Ok(response);
        }
    }
}
