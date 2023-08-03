using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class UserSecurityQa
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string SecurityQuestion { get; set; } = null!;
        public string SecurityAnswer { get; set; } = null!;

        public virtual User User { get; set; } = null!;
    }
}
