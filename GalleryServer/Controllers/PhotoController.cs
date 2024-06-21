using Microsoft.AspNetCore.Mvc;

namespace GalleryServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PhotoController : ControllerBase
    {
        [HttpGet("{page}")]
        public IActionResult GetPhotos(int page)
        {
            return Ok();
            //try
            //{
            //    var enumPhotos = Photo.GetAllPhoto();

            //    if (enumPhotos == null) throw new Exception();

            //    if (page * 10 < enumPhotos.Count())
            //    {
            //        if (page == 1)
            //        {
            //            var response = enumPhotos.Where(x => x.Id > 3).ToList();
            //            return response;
            //        }
            //        else 
            //        {
            //            var indexStart = page * 10 - 10;
            //            var indexEnd = page * 10;
            //            var response = enumPhotos.Where(x => x.Id <= indexEnd && x.Id >= indexStart).ToList();
            //            return response;
            //        }
            //    }
            //    throw new Exception();
            //}
            //catch (Exception ex) 
            //{
            //    throw new Exception();
            //}
        }
    }
}
