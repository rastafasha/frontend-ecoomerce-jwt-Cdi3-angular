import { Category } from './category';
export class Producto {
  id: number;
  name: string;
  price: number;
  video_review: string;
  info_short: string;
  description: string;
  category: Category;
  is_featured: boolean;
  is_active: boolean;
  img: string;
  created_at: Date;
  updated_at: Date;

  constructor(id, name, description, category, price, imageUrl,  ){
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.img = imageUrl;
  }
}
