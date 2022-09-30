import { environment } from 'src/environments/environment';
import { Category } from './category';

const base_url = environment.baseUrl;
export class Producto {
  titulo: string;
  precio_ahora: number;
  precio_antes: string;
  video_review: string;
  info_short: string;
  detalle: string;
  stock: string;
  categoria: Category;
  subcategoria: string;
  isFeatured: boolean;
  status: boolean;
  marca: string;
  createdAt: Date;
  updatedAt: Date;
  img?: string;
  _id?: string;

  constructor(id, name, description, category, price, imageUrl,  ){
    this._id = id;
    this.titulo = name;
    this.detalle = description;
    this.categoria = category;
    this.precio_ahora = price;
    this.img = imageUrl;
  }


  get imagenUrl(){

    if(!this.img){
      return `${base_url}/uploads/productos/no-image.jpg`;
    } else if(this.img.includes('https')){
      return this.img;
    } else if(this.img){
      return `${base_url}/uploads/productos/${this.img}`;
    }else {
      return `${base_url}/uploads/productos/no-image.jpg`;
    }

  }
}
