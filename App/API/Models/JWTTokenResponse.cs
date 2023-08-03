namespace API.Models
{
    public class JWTTokenResponse
    {
        public string? AccessToken { get; set; }
        public string? Error { get; set; }
        public string? ResponseData { get; set; }
    }
}
