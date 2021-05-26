import { Product } from "./Product";

export class Image {
    constructor(public Id?:number, public Url?:string, public IsMain?:boolean, public Product?:Product,
        public ProductId?:number){

    }
}
