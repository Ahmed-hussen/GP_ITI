using System;

namespace Souqly_API.Dtos.Orders
{
    public class AddOrderDto
    {

        public float DealPrice { get; set; }
        public float SiteProfits { get; set; }
        public float ShippingProfits { get; set; }
        public float MarktingProfits { get; set; }
        public float SupplierProfits { get; set; }
        public float TotalPriceForClient { get; set; }

        public string City { get; set; }
        public float price { get; set; }
        public int Duration { get; set; }

        public DateTime OrderDate { get; set; }
        public DateTime ShippedDate { get; set; }
        public int BillId { get; set; }
        public int ShippingId { get; set; }
        public int ShipperId { get; set; }
        public string Status { get; set; }
        // Client Info
        public string ClientName { get; set; }
        public int Phone { get; set; }
        public string Address { get; set; }

        public int Quantity { get; set; }
        public int StockIn { get; set; }
        public float TotalOptionPrice { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }


        public AddOrderDto()
        {
            DateTime endDate=DateTime.Now;

            this.OrderDate=DateTime.Now;

            this.ShippedDate=endDate.AddDays(Duration);

            this.Status="Pending";

        }


    }
}