using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.RequestModel
{
    public class VaccineAgeMappingRequest
    {
        [JsonIgnore]
        public int Id { get; set; }
        public int VaccineAgeId { get; set; }
        public int VaccineDoseId { get; set; }
    }
}
