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
      { title: 'Offer 1', price: 200.00 },
      { title: 'Offer 2', price: 300.00 },
      { title: 'Offer 3', price: 500.00 },
    ];
    this.recommendations = [
      { name: 'Recommendation 1', price: 700.00 },
      { name: 'Recommendation 2', price: 300.00 },
      { name: 'Recommendation 3', price: 880.00 },
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
