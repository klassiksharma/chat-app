import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  currentUser:string = ''
  loggedInUser:string = '';


  setLoggedInUser(val){
    this.loggedInUser = val;
  }

  getLoggedInUser(){
    return this.loggedInUser
  }


  setCurrentUser(val:string){
    this.currentUser = val;
  }

  getCurrentUser(){
    return this.currentUser
  }

}
