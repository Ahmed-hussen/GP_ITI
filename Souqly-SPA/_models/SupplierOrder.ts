import { Product } from "./Product";
import { User } from "./user";

export class SupplierOrder {
    constructor(public Id?:number, public OrderId?:number, public ProductId?:number, public UserId?:number,
        public Quantity?:number, public status?:string, public Order?:number, public Product?:Product,
        public User?:User){

    }
}
