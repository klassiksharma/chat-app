import { Component } from '@angular/core';
import {ChatServiceService} from "./chat-service.service";
import {UserService} from "./user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private chatService: ChatServiceService, private userService: UserService) {

  }

  ngOnInit(){
    //this.userService.setLoggedInUser('Ajit')
    //this.userService.setCurrentUser('saumya')
    //this.chatService.startConnection(this.userService.getLoggedInUser())
    //this.chatService.startConnection(this.userService.getCurrentUser())
  }

  setLoggedIn(val){
    this.userService.setLoggedInUser(val);
    //this.chatService.startConnection(val);
  }

}
