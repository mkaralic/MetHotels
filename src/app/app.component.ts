import { Component } from '@angular/core';
import { Room } from './room/room.model'; // priključuje se model da bi mogao da se koristi u klasi
import { Offer } from './offercomponent/offer.model';
import { Recommendation } from './recommendationcomponent/recommendation.model';
import { Reservation } from './reservation/reservation.model';
import { MetHotelsApiService } from './services/met-hotels-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MetHotels';
  // lista soba
  rooms: Room[];
  reservations: Reservation[];
  offers: Offer[];
  recommendations: Recommendation[];

  isRoomsVisible: boolean = false;
  isReservationVisible: boolean = true;
  isOfferVisible: boolean = false;
  isRecommendationVisible: boolean = false;
  isAboutUsVisible: boolean = false;
  
  constructor(private api: MetHotelsApiService) {
    this.api.getRooms().subscribe((rooms) => this.rooms = rooms);
    // this.rooms = [
    //   { roomNumber: 101, floor: 1, person: 2 },
    //   { roomNumber: 102, floor: 1, person: 2 },
    //   { roomNumber: 103, floor: 1, person: 3 }
    // ];
    this.offers = [
      { title: 'Nocenje', price: 4800.00 },
      { title: 'Dorucak', price: 600.00 },
      { title: 'Rucak', price: 1800.00 },
      { title: 'Vecera', price: 1600.00 },
    ];
    this.recommendations = [
      { name: 'Nocenje sa doruckom', price: 5600.00 },
      { name: 'Polupansion', price: 6400.00 },
    ];
    this.reservations = [];
  }
}
