import { ProductOptionCart } from "./ProductOptionCart";
import { User } from "./user";

export class Cart {
    constructor(public Id?:number, public Marketing?:User, public MarketingId?:number, 
        public ProductOptionCart?:ProductOptionCart[]){

    }
}
