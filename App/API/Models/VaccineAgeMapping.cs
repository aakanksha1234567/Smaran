using System;
using System.Collections.Generic;

#nullable disable

namespace SmaranAPI.Models
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

        public virtual VaccineAge VaccineAge { get; set; }
        public virtual VaccineDose VaccineDose { get; set; }
        public virtual ICollection<RecordVaccine> RecordVaccines { get; set; }
    }
}
