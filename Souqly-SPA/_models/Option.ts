import { Product } from "./Product";
import { ProductOptionCart } from "./ProductOptionCart";

export class Option {
    constructor(public Id?:number, public Code?:string, public StockIn?:number, public Name?:string,
        public ItemPrice?:number, public AvailableOptions?:string, public Product?:Product, 
        public ProductId?:number, public ProductOptionCart?:ProductOptionCart[]){

    }
}