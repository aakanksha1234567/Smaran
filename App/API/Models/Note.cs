using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class Note
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Subject { get; set; } = null!;
        public string Title { get; set; } = null!;
        public string Notes { get; set; } = null!;
        public string Attachment { get; set; } = null!;
        public string Type { get; set; } = null!;
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        public virtual User User { get; set; } = null!;
    }
}
