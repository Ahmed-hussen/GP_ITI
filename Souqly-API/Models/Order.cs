using System.Collections;
using System;
using System.Collections.Generic;

namespace Souqly_API.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime ShippedDate { get; set; }
        public Bill Bill { get; set; }
        public int BillId { get; set; }
        public  Shipping Shipping  { get; set; }
        public int ShippingId { get; set; }
        public User Shipper { get; set; }
        public int ShipperId { get; set; }
        public OrderDetail OrderDetails { get; set; }
      
        // Client Info
        public int Phone { get; set; }
        public string Address { get; set; }
 
   
        
        
        
        
        
        


      
    }
}