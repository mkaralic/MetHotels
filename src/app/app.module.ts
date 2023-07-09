import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { RoomscomponentComponent } from './roomscomponent/roomscomponent.component';
import { OffercomponentComponent } from './offercomponent/offercomponent.component';
import { RecommendationcomponentComponent } from './recommendationcomponent/recommendationcomponent.component';
import { AboutusComponent } from './aboutus/aboutus.component'; 

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomscomponentComponent,
    OffercomponentComponent,
    RecommendationcomponentComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
