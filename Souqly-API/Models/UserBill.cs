namespace Souqly_API.Models
{
    public class UserBill
    {
        public User User { get; set; }
        public int UserId { get; set; }
        public Bill Bill { get; set; }
        public int BillId { get; set; }
        public int UserProfit { get; set; }
        public bool Active { get; set; }

    }
}