import { Component, Input } from '@angular/core';
import { Room } from 'src/app/room/room.model'

@Component({
  selector: 'app-roomscomponent',
  templateUrl: './roomscomponent.component.html',
  styleUrls: ['./roomscomponent.component.css']
})
export class RoomscomponentComponent {
  @Input() rooms: Room[];
  visible: boolean = true;

  constructor() {
    
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
