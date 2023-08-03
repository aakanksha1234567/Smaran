using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class PastAchievement
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string GivenBy { get; set; } = null!;
        public string Title { get; set; } = null!;
        public string? Comment { get; set; }
        public string? Link { get; set; }
        public string? Attachment { get; set; }
        public string Type { get; set; } = null!;
        public DateTime CreatedDate { get; set; }

        public virtual User User { get; set; } = null!;
    }
}
