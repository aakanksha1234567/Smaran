using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.RequestModel
{
    public class AppointmentRequest
    {
        [JsonIgnore]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string AppointmentAt { get; set; }
        public string AppointmentNotes { get; set; }
        public string AppointmentAttachment { get; set; }
        public DateTime AppointmentTime { get; set; }
    }
}
