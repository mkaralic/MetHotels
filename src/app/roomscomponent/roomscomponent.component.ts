import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/room/room.model';
import { FormGroup, FormControl, FormBuilder, NgModel } from '@angular/forms';
import { MetHotelsApiService } from '../services/met-hotels-api.service';
import { Subject } from 'rxjs';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-roomscomponent',
  templateUrl: './roomscomponent.component.html',
  styleUrls: ['./roomscomponent.component.css'],
})
export class RoomscomponentComponent implements OnInit {
  @Input() rooms: Room[];
  visible: boolean = true;

  roomsObserver: Subject<Room[]> = new Subject<Room[]>;

  constructor(private api: MetHotelsApiService) {
    api.roomsObservable.subscribe({
      next: (rooms) => this.rooms = rooms
    })
  }

  ngOnInit(): void {
    // this.api.getRooms().subscribe((rooms) => this.rooms = rooms);
    this.api.getRooms();
  }
  // event handler click eventa dugmeta na formi
  addRoom(roomNumber: NgModel, floor: any, person: any): boolean {
    // ubacuju se brojčane vrednosti. nije rađena validacija u ovom primeru
    let newRoom = new Room(
      parseInt(roomNumber.value),
      parseInt(floor.value),
      parseInt(person.value)
    );
    this.api.addRoom(newRoom).subscribe((room) => this.rooms.push(room));
    roomNumber.control.reset();
    floor.control.reset();
    person.control.reset();
    return false;
  }

  deleteRoom(id: number) {
    let selectedRoom = this.rooms.findIndex((room) => room.id == id);
    this.api.deleteRoom(id).subscribe(() => this.rooms.splice(selectedRoom, 1));
  }

  log(event: any) {
    let val = event.target.value;
    if (String(val).length < 6) console.log(val);
  }
}
