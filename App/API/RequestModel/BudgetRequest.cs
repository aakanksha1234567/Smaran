using System.Text.Json.Serialization;

namespace API.RequestModel
{
    public class BudgetRequest
    {
        [JsonIgnore]
        public int Id { get; set; }
        public int UserId { get; set; }
        public decimal Income { get; set; }
        public decimal Savings { get; set; }
        public decimal Expenditure { get; set; }
        public decimal MonthlyBalance { get; set; }
    }
}
