using System;
using System.Collections.Generic;

#nullable disable

namespace SmaranAPI.Models
{
    public partial class Appointment
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string AppointmentAt { get; set; }
        public string AppointmentNotes { get; set; }
        public string AppointmentAttachment { get; set; }
        public DateTime UpdateDate { get; set; }
        public DateTime AppointmentTime { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
