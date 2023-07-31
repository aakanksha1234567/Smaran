using System;
using System.Collections.Generic;

#nullable disable

namespace SmaranAPI.Models
{
    public partial class Budget
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public decimal Income { get; set; }
        public decimal Savings { get; set; }
        public decimal Expenditure { get; set; }
        public decimal MonthlyBalance { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
