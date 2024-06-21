using Newtonsoft.Json;

namespace GalleryServer.Controllers
{
    public interface IPhoto
    {
        Task<IEnumerable<Photo>> GetAllAsync();
    }
}