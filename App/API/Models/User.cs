using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class User
    {
        public User()
        {
            Appointments = new HashSet<Appointment>();
            Feedbacks = new HashSet<Feedback>();
            MedicalReports = new HashSet<MedicalReport>();
            Notes = new HashSet<Note>();
            RecordMedicines = new HashSet<RecordMedicine>();
            RecordMeetings = new HashSet<RecordMeeting>();
            UserSecurityQas = new HashSet<UserSecurityQa>();
        }

        public int Id { get; set; }
        public string Password { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public bool IsSelf { get; set; }
        public string Phone { get; set; } = null!;
        public string Email { get; set; } = null!;
        public DateTime CreatedDate { get; set; }

        public virtual ICollection<Appointment> Appointments { get; set; }
        public virtual ICollection<Feedback> Feedbacks { get; set; }
        public virtual ICollection<MedicalReport> MedicalReports { get; set; }
        public virtual ICollection<Note> Notes { get; set; }
        public virtual ICollection<RecordMedicine> RecordMedicines { get; set; }
        public virtual ICollection<RecordMeeting> RecordMeetings { get; set; }
        public virtual ICollection<UserSecurityQa> UserSecurityQas { get; set; }
    }
}
