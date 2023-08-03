using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class MedicalReport
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; } = null!;
        public string GivenBy { get; set; } = null!;
        public string Comments { get; set; } = null!;
        public string Attachment { get; set; } = null!;
        public DateTime CreatedDate { get; set; }

        public virtual User User { get; set; } = null!;
    }
}
