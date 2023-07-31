using System;
using System.Collections.Generic;

#nullable disable

namespace SmaranAPI.Models
{
    public partial class VaccineAge
    {
        public VaccineAge()
        {
            VaccineAgeMappings = new HashSet<VaccineAgeMapping>();
        }

        public int Id { get; set; }
        public string Age { get; set; }

        public virtual ICollection<VaccineAgeMapping> VaccineAgeMappings { get; set; }
    }
}
