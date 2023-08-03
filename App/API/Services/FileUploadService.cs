using System.Net.Http.Headers;

namespace API.Services
{
    public class FileUploadService
    {
        public static async Task<string> Upload(IFormCollection formCollection)
        {
            string fileName = string.Empty;
            try
            {
                //var formCollection = await Request.ReadFormAsync();
                //var files = Request.Form.Files;

                var files = formCollection.Files;

                foreach (var file in files)
                {
                    var folderName = Path.Combine("Resources", "Images");
                    var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                    if (file.Length > 0)
                    {
                        fileName = System.DateTime.Now.ToString("ddmmyyyyhhmmss") + ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                        var fullPath = Path.Combine(pathToSave, fileName);
                        var dbPath = Path.Combine(folderName, fileName);
                        using (var stream = new FileStream(fullPath, FileMode.Create))
                        {
                            file.CopyTo(stream);
                        }
                    }
                }
                return fileName;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
