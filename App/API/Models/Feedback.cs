using System;
using System.Collections.Generic;

#nullable disable

namespace SmaranAPI.Models
{
    public partial class Feedback
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Comments { get; set; }
        public string Email { get; set; }
        public string Attachment { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
