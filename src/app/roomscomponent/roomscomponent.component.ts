import { Component, Input } from '@angular/core';
import { Room } from 'src/app/room/room.model'
import { FormGroup, FormControl, FormBuilder, NgModel } from '@angular/forms'

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
  // addRoom(roomNumber: HTMLInputElement, floor: HTMLInputElement, person: HTMLInputElement) : boolean {
    addRoom(roomNumber: NgModel, floor: any, person: any) : boolean {
      // ubacuju se brojčane vrednosti. nije rađena validacija u ovom primeru
    this.rooms.push(new Room(parseInt(roomNumber.value), parseInt(floor.value), parseInt(person.value)));
    roomNumber.control.reset();
    floor.control.reset();
    person.control.reset();
    return false;
  }

  log(event: any) {
    let val = event.target.value
    if(String(val).length < 6)
      console.log(val);
  }
}
