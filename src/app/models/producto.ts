import { Category } from './category';
export class Producto {
  id: number;
  name: string;
  cod_prod: string;
  price: number;
  video_review: string;
  info_short: string;
  description: string;
  category_id: Category;
  is_featured: boolean;
  is_active: boolean;
  img: string;
  created_at: Date;
  updated_at: Date;
  _id?: string;

  constructor(id, cod_prod, name, description, category_id, price, imageUrl,  ){
    this.id = id;
    this.cod_prod = cod_prod;
    this.name = name;
    this.description = description;
    this.category_id = category_id;
    this.price = price;
    this.img = imageUrl;
  }
}
