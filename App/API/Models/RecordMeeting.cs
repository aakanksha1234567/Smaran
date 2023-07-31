using System;
using System.Collections.Generic;

#nullable disable

namespace SmaranAPI.Models
{
    public partial class RecordMeeting
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string MeetingWith { get; set; }
        public DateTime MeetingTime { get; set; }
        public string MeetingPlace { get; set; }
        public string Notes { get; set; }
        public string Link { get; set; }
        public string Attachment { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
