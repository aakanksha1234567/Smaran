using System.Text.Json.Serialization;

namespace API.RequestModel
{
    public class MedicalReportRequest
    {
        [JsonIgnore]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; } = null!;
        public string GivenBy { get; set; } = null!;
        public string Comments { get; set; } = null!;
        public string Attachment { get; set; } = null!;
    }
}
