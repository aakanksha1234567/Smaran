using System.Collections.Generic;

namespace SmaranAPI.RequestModel
{
    public class UserRequest
    {
        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public bool IsSelf { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public List<SecurityQa> SecurityQas { get; set; } = new List<SecurityQa>();
    }

    public partial class SecurityQa
    {
        public string SecurityQuestion { get; set; }

        public string SecurityAnswer { get; set; }
    }
}
