namespace Souqly_API.Dtos.Carts
{
    public class AddToCartDto
    {
        public int OptionId { get; set; } //5
        public int Quantity { get; set; }

        public float NewPrice { get; set; }
        public int CartId { get; set; }

    }
}