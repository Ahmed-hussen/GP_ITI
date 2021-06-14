namespace Souqly_API.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string Url { get; set; }
      
        public bool IsMain { get; set; }
    
        public Product Product { get; set; }
        public int ProductId { get; set; }
    }
}