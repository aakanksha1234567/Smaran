using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class RecordMedicine
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string MedicineName { get; set; } = null!;
        public int MedicineMg { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string MedicineDose { get; set; } = null!;
        public string? MedicineReaction { get; set; }
        public int MedicineDuration { get; set; }
        public bool Status { get; set; }
        public string ScheduleTime { get; set; } = null!;
        public DateTime CreatedDate { get; set; }

        public virtual User User { get; set; } = null!;
    }
}
