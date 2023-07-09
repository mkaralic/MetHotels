import { Component } from '@angular/core';
import { Room } from './room/room.model'; // priključuje se model da bi mogao da se koristi u klasi
import { Offer } from './offercomponent/offer.model';
import { Recommendation } from './recommendationcomponent/recommendation.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MetHotels';
  // lista soba
  rooms: Room[];
  offers: Offer[];
  recommendations: Recommendation[];

  isRoomsVisible: boolean = true;
  isOfferVisible: boolean = false;
  isRecommendationVisible: boolean = false;
  isAboutUsVisible: boolean = false;
  
  constructor() {
    this.rooms = [
      { roomNumber: 101, floor: 1, person: 2 },
      { roomNumber: 102, floor: 1, person: 2 },
      { roomNumber: 103, floor: 1, person: 3 }
    ];
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
  }

  onRooms() {
    this.hideAll();
    this.isRoomsVisible = true;
  }

  onOffer() {
    this.hideAll();
    this.isOfferVisible = true;
  }

  onRecommendation() {
    this.hideAll();
    this.isRecommendationVisible = true;
  }

  onAboutUs() {
    this.hideAll();
    this.isAboutUsVisible = true;
  }

  hideAll() {
    this.isRoomsVisible = false;
    this.isOfferVisible = false;
    this.isRecommendationVisible = false;
    this.isAboutUsVisible = false;
  }
}
