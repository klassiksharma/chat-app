import {Component, Input} from "@angular/core";
import {ChatServiceService} from "../../chat-service.service";
import * as moment from "moment"
import {UserService} from "../../user.service";

@Component({
  selector: 'chat-box',
  templateUrl: './chat-box.html',
  styleUrls: ['./chat-box.css']
})

export class ChatBox{

  constructor(private chatService: ChatServiceService, private userService: UserService){}


  message:any = {
    'username': '',
    'string': '',
    'from': ''
  };
  messages:any = [];


  chatMessages:any = [
    "Hi",
    "How are you?",
    "Good Morning"
  ]

  sendMessage() {
    this.message.username = this.userService.getCurrentUser();
    this.message.from = this.userService.loggedInUser;
    console.log("Message to server => ", this.message)
    this.chatService.sendMessage(this.message);
    this.message.string = '';
  }

  ngOnInit() {
    console.log("ngonoiniyt")
    this.chatService
      .getMessages()
      /* .distinctUntilChanged()
       .filter((message) => message.trim().length > 0)
       .throttleTime(1000)
       .skipWhile((message) => message !== this.secretCode)
       .scan((acc: string, message: string, index: number) =>
           `${message}(${index + 1})`
         , 1)*/
      .subscribe((message:any) => {
        console.log("Message", message);
        const currentTime = moment().format('hh:mm:ss a');
        //const messageWithTimestamp = `${currentTime}: ${message.string}`;
        this.messages.push({
          'message': message.string,
          'timestamp': currentTime,
          'from': message.from,
          'to': message.username
        });
        console.log("LoggedInUser", this.userService.getLoggedInUser(), "from", message.from);
        console.log("currentUser", this.userService.getCurrentUser(), "to=>", message.username);
      });
  }


}
