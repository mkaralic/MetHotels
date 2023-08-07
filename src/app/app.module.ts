import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { RoomscomponentComponent } from './roomscomponent/roomscomponent.component';
import { OffercomponentComponent } from './offercomponent/offercomponent.component';
import { RecommendationcomponentComponent } from './recommendationcomponent/recommendationcomponent.component';
import { AboutusComponent } from './aboutus/aboutus.component'; 
import { RoomServiceService } from './services/room-service.service';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomscomponentComponent,
    OffercomponentComponent,
    RecommendationcomponentComponent,
    AboutusComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ RoomServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
