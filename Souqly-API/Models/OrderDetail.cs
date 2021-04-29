namespace Souqly_API.Models
{
    public class OrderDetail
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public int StockIn { get; set; }
        public float price { get; set; }
        public Order Order { get; set; }
        public int OrderId { get; set; }
        public Product Product { get; set; }
        public int ProductId { get; set; }
    }
}