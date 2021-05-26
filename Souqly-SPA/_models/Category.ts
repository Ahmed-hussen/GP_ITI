import { Product } from "./Product";

export class Category {
    constructor(public Id?:number, public CategoryName?:string, public Products?:Product[]){
    }
}
