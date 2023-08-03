using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class VaccineDose
    {
        public VaccineDose()
        {
            VaccineAgeMappings = new HashSet<VaccineAgeMapping>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;

        public virtual ICollection<VaccineAgeMapping> VaccineAgeMappings { get; set; }
    }
}
