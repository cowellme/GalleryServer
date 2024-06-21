using Newtonsoft.Json;

namespace GalleryServer.Controllers
{
    public class Photo : IPhoto
    {
        private static IEnumerable<Photo>? _photos = null;
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public string base64 { get; set; } = string.Empty;
        public double Price { get; set; } = 0.0;


        public static IEnumerable<Photo> GetAllPhoto()
        {
            try
            {
                var jsonString = File.ReadAllText(Environment.CurrentDirectory + @"/photos.json");

                if (_photos != null)
                    return _photos;


                var response = JsonConvert.DeserializeObject<IEnumerable<Photo>>(jsonString);

                if (response == null) throw new Exception();
                int i = 1;

                foreach (var photo in response)
                {
                    photo.Id = i;
                    i++;
                }

                _photos = response;

                SaveAllPhoto(response.ToList());

                return response;
            }
            catch
            {
                throw new Exception();
            }
        }

        public static void SaveAllPhoto(List<Photo> photos)
        {
            var path = Environment.CurrentDirectory + @"/photos.json";

            var jsString = JsonConvert.SerializeObject(photos);

            File.WriteAllText(path, jsString);
        }

        public Task<IEnumerable<Photo>> GetAllAsync()
        {
            Task<IEnumerable<Photo>> photos = new Task<IEnumerable<Photo>>(GetAllPhoto);

            return photos;
        }
    }
}