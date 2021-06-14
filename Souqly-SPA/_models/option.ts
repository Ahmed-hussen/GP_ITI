import { Product } from "./Product";
import { ProductOptionCart } from "./ProductOptionCart";

export class Option {
    constructor(public id?:number, public code?:string, public stockIn?:number, public name?:string,
        public itemPrice?:number, public availableOptions?:string, public product?:Product, 
        public productId?:number, public productOptionCart?:ProductOptionCart[]){

    }
}