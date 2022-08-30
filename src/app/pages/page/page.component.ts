import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  user: Usuario;

  constructor(
    public router: Router,
    public http: HttpClient,
    private usuarioService: UsuarioService,
    public activatedRoute: ActivatedRoute,
  ) {
    this.user = usuarioService.user;
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.obtenerUser();
  }

  obtenerUser(){
    this.usuarioService.get_user(this.user).subscribe(
      resp=>{
        this.user = resp;
        console.log(this.user);
      }
    )
  }

}
