export interface ProductDataDto {

   //product main data
    productName:string
     weight:number
     description:string
     brand:string
     dimension:string
     categoryId:number

   //options
     codes:string[]
    stockIns:string[]
    itemPrices:number[]
    availableOptions:string[]

}
