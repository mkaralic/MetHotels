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

  constructor() {
    this.rooms = [
      { roomNumber: 101, floor: 1, person: 2 },
      { roomNumber: 102, floor: 1, person: 2 },
      { roomNumber: 103, floor: 1, person: 3 }
    ];
  }

  // event handler click eventa dugmeta na formi
  addRoom(roomNumber: HTMLInputElement, floor: HTMLInputElement, person: HTMLInputElement) : boolean {
    // ubacuju se brojčane vrednosti. nije rađena validacija u ovom primeru
    this.rooms.push(new Room(parseInt(roomNumber.value), parseInt(floor.value), parseInt(person.value)));
    roomNumber.value = '';
    floor.value = '';
    person.value = '';
    return false;
  }
}
