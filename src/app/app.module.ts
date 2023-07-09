import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { RoomscomponentComponent } from './roomscomponent/roomscomponent.component'; 

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomscomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
