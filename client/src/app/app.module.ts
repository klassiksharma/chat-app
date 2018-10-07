import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';

import {ChatServiceService} from "./chat-service.service"

import {UserService} from "./user.service";

import {ChatBox} from "./components/chat-box/chat-box";
import {UserList} from "./components/user-list/user-list";
import { SearchPipe } from './components/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatBox,
    UserList,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatServiceService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
