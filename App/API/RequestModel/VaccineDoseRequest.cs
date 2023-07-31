﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SmaranAPI.RequestModel
{
    public class VaccineDoseRequest
    {
        [JsonIgnore]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
