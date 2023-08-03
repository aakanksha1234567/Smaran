using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.RequestModel
{
    public class NoteRequest
    {
        [JsonIgnore]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Subject { get; set; }
        public string Title { get; set; }
        public string Notes { get; set; }
        public string Attachment { get; set; }
        public string Type { get; set; }
    }
}
