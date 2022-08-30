import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Curso } from '../models/curso';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = new Subject()

  constructor() { }

  sendMessage(producto: Producto):void{
    this.message.next(producto);
  }

  sendMessageCurso(curso: Curso):void{
    this.message.next(curso);
  }

  getMessage(): Observable<any>{
    return this.message.asObservable();
  }
}
