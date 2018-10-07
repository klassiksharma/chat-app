import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatServiceService {

  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
    console.log("Socket",this.socket)
  }

  public startConnection(details){
    this.socket.emit('add-user', details)
  }

  public sendMessage(message) {
    if(this.checkValidity(message)){
      this.socket.emit('private-message', message);
    }
    //this.socket.emit('new-message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('add-message', (message) => {
        console.log('ser', message);
        observer.next(message);
      });
    });
  }

  checkValidity(msg){
    return msg.username && msg.string && msg.from
  }

  /*public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        console.log('ser', message);
        observer.next(message);
      });
    });
  }*/

}
