using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.RequestModel
{
    public class UpdatePasswordRequest
    {
        public string Email { get; set; }
        public string SecurityQuestion { get; set; }
        public string SecurityAnswer { get; set; }
        public string Password { get; set; }
    }
}
