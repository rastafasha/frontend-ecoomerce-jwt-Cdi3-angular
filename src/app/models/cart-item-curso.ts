import { Category } from './category';
import { Curso } from './curso';
export class CartItemCurso {

  cursoId: number;
  cursoCode: string;
  cursoName: string;
  cursoPrice:number;
    description:string;
    quantity:number;
    category_name:Category;
    category_id:Category;
    img:string;

    constructor(curso: Curso){
      this.cursoId= curso.id;
      this.cursoCode= curso.cod_prod;
      this.cursoName = curso.name;
      this.category_id = curso.category_id;
      this.description = curso.description;
      this.cursoPrice = curso.price;
      this.img = curso.img;
      this.quantity = 1;
    }


}
