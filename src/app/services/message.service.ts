import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

  getMessage(): Observable<any>{
    return this.message.asObservable();
  }
}
