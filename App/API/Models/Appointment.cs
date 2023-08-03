using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class Appointment
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string AppointmentAt { get; set; } = null!;
        public string AppointmentNotes { get; set; } = null!;
        public string AppointmentAttachment { get; set; } = null!;
        public DateTime UpdateDate { get; set; }
        public DateTime AppointmentTime { get; set; }
        public DateTime CreatedDate { get; set; }

        public virtual User User { get; set; } = null!;
    }
}
