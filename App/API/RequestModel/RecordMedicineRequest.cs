using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.RequestModel
{
    public class RecordMedicineRequest
    {
        [JsonIgnore]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string MedicineName { get; set; }
        public int MedicineMg { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string MedicineDose { get; set; }
        public string MedicineReaction { get; set; }
        public int MedicineDuration { get; set; }
    }
}
