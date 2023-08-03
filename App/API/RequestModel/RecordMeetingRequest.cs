using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.RequestModel
{
    public class RecordMeetingRequest
    {
        [JsonIgnore]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string MeetingWith { get; set; }
        public DateTime MeetingTime { get; set; }
        public string MeetingPlace { get; set; }
        public string Notes { get; set; }
        public string Link { get; set; }
        public string Attachment { get; set; }
    }
}
