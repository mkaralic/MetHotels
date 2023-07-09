import { Component, Input } from '@angular/core';
import { Room } from './room.model';

@Component({
  selector: '[app-room]',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  // referenca za uvoz vrednosti iz roditeljskog podatka
  @Input() room: Room;
}
