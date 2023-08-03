using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.RequestModel
{
    public class PastAchievementRequest
    {
        [JsonIgnore]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string GivenBy { get; set; }
        public string Title { get; set; }
        public string Comment { get; set; }
        public string Link { get; set; }
        public string Attachment { get; set; }
        public string Type { get; set; }
    }
}
