import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';

import {ChatServiceService} from "./chat-service.service"

import {UserService} from "./user.service";

import {ChatBox} from "./components/chat-box/chat-box";
import {UserList} from "./components/user-list/user-list";
import {MessagePipe, SearchPipe} from './components/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatBox,
    UserList,
    SearchPipe,
    MessagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatServiceService, UserService, MessagePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
