import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from './room.model';

@Component({
  selector: '[app-room]',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  // referenca za uvoz vrednosti iz roditeljskog podatka
  @Input() room: Room;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  deleteRoom(id: number) {
    this.delete.emit(id);
  }
}
