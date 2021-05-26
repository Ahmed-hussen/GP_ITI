import { Category } from "./Category";
import { Image } from "./Image";
import { MarketingProduct } from "./MarketingProduct";
import { Option } from "./Option";
import { ProductOptionCart } from "./ProductOptionCart";
import { User } from "./user";

export class Product {
    constructor(public Id?:number, public ProductName?:string, public Weight?:number, public Description?:string,
        public Brand?:string, public Date?:Date, public Dimension?:string, public Category?:Category,
        public CategoryId?:number, public Options?:Option[], public Images?:Image[],
            public ProductCarts?:ProductOptionCart[], public MarketingProducts?:MarketingProduct[],
            public Supplier?:User[], public SupplierId?:number){

    }
}
