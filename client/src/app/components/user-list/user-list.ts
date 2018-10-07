import {Component} from "@angular/core";
import {UserService} from "../../user.service";
import {ChatServiceService} from "../../chat-service.service";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css']
})

export class UserList{

  constructor(private userService: UserService, private chatService: ChatServiceService){}

  users:any = ["Ajit", "Raje", "saumya", "Kush"]

  setUser(val){
    this.userService.setCurrentUser(val);
    this.chatService.startConnection(val);
  }
}
