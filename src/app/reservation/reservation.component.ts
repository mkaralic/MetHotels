import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Reservation } from './reservation.model';
import { RoomServiceService } from '../services/room-service.service';
import { Room } from '../room/room.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent {
  @Input() reservations: Reservation[];
  @Input() rooms: Room[];

  constructor(private roomService: RoomServiceService) {}

  addReservation(roomNumber: NgModel, numberOfNights: NgModel) {
    let reservation = new Reservation(parseInt(roomNumber.value), parseInt(numberOfNights.value), this.roomService.getPrice(parseInt(numberOfNights.value)));
    this.reservations.splice(0);
    this.reservations.push(reservation);
  }
}
