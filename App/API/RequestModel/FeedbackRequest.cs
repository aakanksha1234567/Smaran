using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.RequestModel
{
    public class FeedbackRequest
    {
        [JsonIgnore]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Comments { get; set; }
        public string Email { get; set; }
        public string Attachment { get; set; }
    }
}
