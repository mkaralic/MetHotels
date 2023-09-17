import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Reservation } from './reservation.model';
import { RoomServiceService } from '../services/room-service.service';
import { Room } from '../room/room.model';
import { MetHotelsApiService } from '../services/met-hotels-api.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  @Input() reservations: Reservation[];
  @Input() rooms: Room[];

  constructor(private roomService: RoomServiceService, private api: MetHotelsApiService) {
  }
  
  ngOnInit() {
    this.api.getRooms().subscribe((rooms) => this.rooms = rooms);
    this.api.getReservations().subscribe((reservations) => this.reservations = reservations);
  }

  addReservation(roomNumber: NgModel, numberOfNights: NgModel) {
    let reservation = new Reservation(parseInt(roomNumber.value), parseInt(numberOfNights.value), this.roomService.getPrice(parseInt(numberOfNights.value)));
    this.api.addReservation(reservation).subscribe((reservation) => this.reservations.push(reservation));
    roomNumber.control.reset();
    numberOfNights.control.reset();
    return false;
  }

  deleteReservation(id: number) {
    let selectedReservation = this.reservations.findIndex((reservation) => reservation.id == id);
    this.api.deleteReservation(id).subscribe(() => this.reservations.splice(selectedReservation, 1));
  }
}
