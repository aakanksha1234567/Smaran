using System;
using System.Collections.Generic;

#nullable disable

namespace SmaranAPI.Models
{
    public partial class MedicalReport
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string GivenBy { get; set; }
        public string Comments { get; set; }
        public string Attachment { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
