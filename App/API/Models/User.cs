using System;
using System.Collections.Generic;

#nullable disable

namespace SmaranAPI.Models
{
    public partial class User
    {
        public User()
        {
            UserSecurityQas = new HashSet<UserSecurityQa>();
        }

        public int Id { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsSelf { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public DateTime CreatedDate { get; set; }

        public virtual ICollection<UserSecurityQa> UserSecurityQas { get; set; }
    }
}
