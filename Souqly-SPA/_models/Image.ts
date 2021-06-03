import { Product } from "./Product";

export class Image {
    constructor(public id?:number, public url?:string, public isMain?:boolean, public product?:Product,
        public productId?:number){

    }
}
 