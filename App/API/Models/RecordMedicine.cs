using System;
using System.Collections.Generic;

#nullable disable

namespace SmaranAPI.Models
{
    public partial class RecordMedicine
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string MedicineName { get; set; }
        public int MedicineMg { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string MedicineDose { get; set; }
        public string MedicineReaction { get; set; }
        public int MedicineDuration { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
