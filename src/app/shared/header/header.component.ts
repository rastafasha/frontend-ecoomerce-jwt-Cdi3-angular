import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { Configuracion } from 'src/app/models/configuracion';
import { CartItemModel } from '../../models/cart-item-model';
import { MessageService } from 'src/app/services/message.service';
import { StorageService } from 'src/app/services/storage.service';
import { Producto } from 'src/app/models/producto';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public linktTheme = document.querySelector('#theme');// se comunica el id pulsado
  public links: NodeListOf<Element>; //obtiene clase del div

  categories: Category;

  @Input() cartItem: CartItemModel;

  cartItems=[];
  total= 0;
  value: string;
  id:string;
  user: Usuario;

  constructor(
    public categoryService: CategoryService,
    public sidebarService: SidebarService,
    public configuracionService: ConfiguracionService,
    public router: Router,
    public http: HttpClient,
    private messageService: MessageService,
    private storageService: StorageService,
    private usuarioService: UsuarioService,
  ) {
  this.user = usuarioService.user;
  }

  classie:any;

  ngOnInit(): void {
    if(this.storageService.existCart()){
      this.cartItems = this.storageService.getCart();
    }
    this.getItem();
    this.total = this.getTotal();
    this.obtenerCategorias();
    this.obtenerUser();
    //this.links = document.querySelectorAll('.selector');//obtiene clase del div // se dispara despues de inicializado el componente
  }


  openMenu(){

    var menuLateral = document.getElementsByClassName("cbp-spmenu");
      for (var i = 0; i<menuLateral.length; i++) {
         menuLateral[i].classList.toggle("cbp-spmenu-open");
        // console.log(colorPais)

      }

  }

  obtenerCategorias(){
    return this.categoryService.getCategories().subscribe(
      resp=>{
        this.categories = resp;
        console.log(this.categories);
      }
    )
  }

  obtenerUser(){
    this.usuarioService.get_user(this.user).subscribe(
      resp=>{
        this.user = resp;
        console.log(this.user);
      }
    )
  }


  getItem():void{
    this.messageService.getMessage().subscribe((product:Producto)=>{
      let exists = false;
      this.cartItems.forEach(item =>{
        if(item.productId === product.id){
          exists = true;
          item.quantity++;
        }
      });
      if(!exists){
        const cartItem = new CartItemModel(product);
        this.cartItems.push(cartItem);

      }
      this.total = this.getTotal();
      this.storageService.setCart(this.cartItems);

    });
  }


  getItemsList(): any[]{

    const items: any[] = [];
    let item = {};
    this.cartItems.forEach((it: CartItemModel)=>{
      item = {
        name: it.productName,
        unit_amount: {
          currency_code: 'USD',
          value: it.productPrice,
        },
        quantity: it.quantity,
        category: it.category,
      };
      items.push(item);
    });
    return items;
  }




  getTotal():number{
    let total =  0;
    this.cartItems.forEach(item => {
      total += item.quantity * item.productPrice;
    });
    return +total.toFixed(2);
  }


}
