import { Image } from "./Image";
import { Option } from "./Option";

export interface ProductWithOptions {
    id:number;
    productName:string;
    weight:number,
    description:string,
    brand:string,
    date:Date,
    dimension:string,
    category:any,
    categoryId:number,
    options:Option[],
    images:Image[],
    productCarts:any[],
    marketingProducts:any[],

    stockIn:number;
    price:number;
    
}