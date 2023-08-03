using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class VaccineAge
    {
        public VaccineAge()
        {
            VaccineAgeMappings = new HashSet<VaccineAgeMapping>();
        }

        public int Id { get; set; }
        public string Age { get; set; } = null!;

        public virtual ICollection<VaccineAgeMapping> VaccineAgeMappings { get; set; }
    }
}
