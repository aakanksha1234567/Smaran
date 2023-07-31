using System;
using System.Collections.Generic;

#nullable disable

namespace SmaranAPI.Models
{
    public partial class UserSecurityQa
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string SecurityQuestion { get; set; }
        public string SecurityAnswer { get; set; }

        public virtual User User { get; set; }
    }
}
