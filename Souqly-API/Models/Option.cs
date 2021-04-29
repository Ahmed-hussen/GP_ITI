namespace Souqly_API.Models
{
    public class Option
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string StockIn { get; set; }
        public string Name { get; set; }
        public string AvailableOptions { get; set; }
        public Product Product { get; set; }
        public int ProductId { get; set; }
    }
}