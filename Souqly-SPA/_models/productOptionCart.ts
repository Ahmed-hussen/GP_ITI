import { Cart } from "./Cart";
import { Option } from "./Option";

export class ProductOptionCart {
    constructor(public Id?:number, public Quantity?:number, public NewPrice?:number, 
        public Option?:Option, public OptionId?:number, public Cart?:Cart, public CartId?:number){

    }
}
