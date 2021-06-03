import { Product } from "./Product";
import { User } from "./user";

export class MarketingProduct {
    constructor(public Id?:number, public Marketing?:User, public Product?:Product, 
        public MarketingId?:number, public ProductId?:number, public Profits?:number, 
        public Confirmed?:boolean){

    }
}
