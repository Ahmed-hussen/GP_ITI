namespace Souqly_API.Models
{
    public class Bill
    {
        public int Id { get; set; }
        public float DealPrice { get; set; }
        public float SiteProfits { get; set; }
        public float ShippingProfits { get; set; }
         public float MarktingProfits { get; set; }
         public float SupplierProfits { get; set; }
         public float TotalPriceForClient { get; set; }
         public Order Order { get; set; }
        
        
    }
    
}