import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

import { RegisterForm } from '../auth/interfaces/register-form.interface';
import { LoginForm } from '../auth/interfaces/login-form.interface';
import { CargarUsuario } from '../auth/interfaces/cargar-usuarios.interface';

import {tap, map, catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Role, Usuario } from '../models/usuario.model';
import { Location } from '@angular/common';

const base_url = environment.baseUrl;
const mediaUrl = environment.mediaUrl;
const clientIdGoogle = environment.client_idGoogle;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;
  public user: Usuario;
  public usuariologin;


  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone,
    ) {
      this.googleInit();
  }

  get token():string{
    return localStorage.getItem('token') || '';
  }

  get role(){
    return this.user.role_id;
  }


  get headers(){
    return{
      headers: {
        'Authorization': this.token
      }
    }
  }

  guardarLocalStorage(
    token: string,
    user: string
    ){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }


  login(formData: LoginForm){


    return this.http.post(`${base_url}login`, formData)
    .pipe(
      tap((resp: any) => {
        this.guardarLocalStorage(
          resp.token,
          resp.user = this.usuariologin
          );
          this.usuariologin = this.validarToken();
      }),
      )

  }




  crearUsuario(formData: RegisterForm){
    return this.http.post(`${base_url}signup`, formData)
    .pipe(
      tap((resp: any) => {
        this.guardarLocalStorage(
          resp.token,
          resp.user
          );
      })
    )
  }


  validarToken(): Observable<boolean>{

    return this.http.get(`${base_url}renew`, {
      headers: {
        'Authorization': this.token
      }
    }).pipe(
      map((resp: any) => {
        const { email, google, first_name, last_name, username, role_id, img='', user_id} = resp.user;

        this.user = new Usuario(email, google, first_name, last_name, username, role_id, img, user_id);

        this.guardarLocalStorage(resp.token,resp.user);
          return true;
        }),
        catchError(error => of(false))
        );
  }

  actualizarPerfil(data: {email: string, first_name: string, role_id: number}){

    data = {
      ...data,
      role_id: this.user.role_id
    }

    return this.http.put(`${base_url}api/updateUser/${this.user.id}`, data, this.headers);
  }


  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');


    this.auth2.signOut().then(()=>{
      this.ngZone.run(()=>{
        this.router.navigateByUrl('/login');
      })
    })
    location.reload();
  }

  googleInit(){

    return new Promise<void>((resolve) =>{

      gapi.load('auth2', () =>{
        this.auth2 = gapi.auth2.init({
          client_id: clientIdGoogle,
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });
    });
  }




  loginGoogle(token){
    return this.http.post(`${base_url}/login/google`, {token})
    .pipe(
      tap((resp: any) => {
        this.guardarLocalStorage(
          resp.token,
          resp.user
          );
      })
    )
  }





  get_user(user):Observable<any>{
    const url = `${base_url}user/` + user;
    return this.http.get(url, this.headers)
  }






    getRoles(){

      const url = `${base_url}api_role/adminRoles/`;
      return this.http.get(url, this.headers)
        .pipe(
          map((resp:{ok: boolean, roles: Role[]}) => resp.roles)
        )

    }


    getRole(id: number){
      const url = `${base_url}api_role/adminRole/${id}`;
      return this.http.get(url, this.headers)
        .pipe(
          map((resp:{ok: boolean, role: Role}) => resp.role)
          );

    }




}
