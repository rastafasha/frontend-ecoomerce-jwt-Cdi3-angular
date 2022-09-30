import { Category } from './category';
import { Curso } from './curso';
export class CartItemCurso {

  cursoId: string;
  cursoName: string;
  cursoPrice:number;
    description:string;
    quantity:number;
    category_name:Category;
    categoria:Category;
    img:string;

    constructor(curso: Curso){
      this.cursoId= curso._id;
      this.cursoName = curso.titulo;
      this.categoria = curso.categoria;
      this.description = curso.detalle;
      this.cursoPrice = curso.precio_ahora;
      this.img = curso.img;
      this.quantity = 1;
    }


}
