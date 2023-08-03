using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class VaccineAgeMapping
    {
        public VaccineAgeMapping()
        {
            RecordVaccines = new HashSet<RecordVaccine>();
        }

        public int Id { get; set; }
        public int VaccineAgeId { get; set; }
        public int VaccineDoseId { get; set; }

        public virtual VaccineAge VaccineAge { get; set; } = null!;
        public virtual VaccineDose VaccineDose { get; set; } = null!;
        public virtual ICollection<RecordVaccine> RecordVaccines { get; set; }
    }
}
