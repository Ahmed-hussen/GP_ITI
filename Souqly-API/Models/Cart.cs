using System.Collections;
using System.Collections.Generic;

namespace Souqly_API.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public float NewPrice { get; set; }
        public ICollection<Product> Products { get; set; }
        public User Markiting { get; set; }
        public int MarkitingId { get; set; }

        // Many To Many Realation
        public  List<ProductCart> ProductCart { get; set; }



    }
}