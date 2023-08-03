using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class RecordVaccine
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int VaccineDetailId { get; set; }
        public DateTime GivenOn { get; set; }
        public DateTime DueOn { get; set; }
        public bool VaccineStatus { get; set; }
        public DateTime CreatedDate { get; set; }

        public virtual User User { get; set; } = null!;
        public virtual VaccineAgeMapping VaccineDetail { get; set; } = null!;
    }
}
