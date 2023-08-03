using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class RecordMeeting
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string MeetingWith { get; set; } = null!;
        public DateTime MeetingTime { get; set; }
        public string? MeetingPlace { get; set; }
        public string? Notes { get; set; }
        public string? Link { get; set; }
        public string? Attachment { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        public virtual User User { get; set; } = null!;
    }
}
