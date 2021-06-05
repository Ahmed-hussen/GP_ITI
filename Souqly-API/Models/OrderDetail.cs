namespace Souqly_API.Models
{
    public class OrderDetail
    {
  public int Id { get; set; }
        public int Quantity { get; set; }
        public float TotalOptionPrice { get; set; }
        public Order Order { get; set; }
        public int OrderId { get; set; }
        public Option Option { get; set; }
        public int OptionId { get; set; }
    }
}