import { Category } from './category';
import { Curso } from './curso';
import { Producto } from './producto';
export class CartItemModel {

    productId: number;
    productCode: string;
    productName: string;
    productPrice:number;
    description:string;
    quantity:number;
    category:Category;
    category_name:Category;
    img:string;

    constructor(product: Producto){
      this.productId= product.id;
      this.productCode= product.cod_prod;
      this.productName = product.name;
      this.category_name = product.category_id;
      this.description = product.description;
      this.productPrice = product.price;
      this.img = product.img;
      this.quantity = 1;
    }



}
