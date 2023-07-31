using System;
using System.Collections.Generic;

#nullable disable

namespace SmaranAPI.Models
{
    public partial class VaccineDose
    {
        public VaccineDose()
        {
            VaccineAgeMappings = new HashSet<VaccineAgeMapping>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<VaccineAgeMapping> VaccineAgeMappings { get; set; }
    }
}
