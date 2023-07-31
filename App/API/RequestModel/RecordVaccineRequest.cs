using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SmaranAPI.RequestModel
{
    public class RecordVaccineRequest
    {
        [JsonIgnore]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int VaccineDetailId { get; set; }
        public DateTime GivenOn { get; set; }
        public DateTime DueOn { get; set; }
        public bool VaccineStatus { get; set; }
    }
}
