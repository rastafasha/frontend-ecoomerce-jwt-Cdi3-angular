import { Category } from './category';
import { Curso } from './curso';
import { Producto } from './producto';
export class CartItemModel {

    productId: string;
    productCode: string;
    productName: string;
    productPrice:number;
    description:string;
    quantity:number;
    category:Category;
    category_name:Category;
    img:string;

    constructor(product: Producto){
      this.productId= product._id;
      this.productName = product.titulo;
      this.category_name = product.categoria;
      this.description = product.detalle;
      this.productPrice = product.precio_ahora;
      this.img = product.img;
      this.quantity = 1;
    }



}
