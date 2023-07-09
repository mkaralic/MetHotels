import { Component } from '@angular/core';
import { Room } from './room/room.model'; // priključuje se model da bi mogao da se koristi u klasi

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MetHotels';
  // lista soba
  rooms: Room[];

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
