import { environment } from "src/environments/environment";

const base_url = environment.baseUrl;
export class Slider {
  constructor(
    public title: string,
    public subtitulo: string,
    public description: string,
    public enlace: string,
    public target: string,
    public boton: string,
    public is_activeText: string,
    public is_activeBot: string,
    public is_active: boolean,
    public img: string,
    public updated_at: Date,
    public created_at: Date,
    public _id?: string,

    ){}

  get imagenUrl(){

    if(!this.img){
      return `${base_url}/uploads/sliders/no-image.jpg`;
    } else if(this.img.includes('https')){
      return this.img;
    } else if(this.img){
      return `${base_url}/uploads/sliders/${this.img}`;
    }else {
      return `${base_url}/uploads/sliders/no-image.jpg`;
    }

  }


}
