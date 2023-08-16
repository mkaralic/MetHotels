import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { RoomscomponentComponent } from './roomscomponent/roomscomponent.component';
import { OffercomponentComponent } from './offercomponent/offercomponent.component';
import { RecommendationcomponentComponent } from './recommendationcomponent/recommendationcomponent.component';
import { AboutusComponent } from './aboutus/aboutus.component'; 
import { RoomServiceService } from './services/room-service.service';
import { ReservationComponent } from './reservation/reservation.component';
import { MetHotelsApiService } from './services/met-hotels-api.service';

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
    RoomServiceService,
    MetHotelsApiService,
    { provide: 'MetHotelsApiUrl', useValue: 'http://localhost:3000' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
