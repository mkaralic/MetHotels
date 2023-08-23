import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Room } from '../room/room.model';
import { Reservation } from '../reservation/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class MetHotelsApiService {

  constructor(private http: HttpClient, @Inject('MetHotelsApiUrl') private metHotelsApiUrl: string) { }

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.metHotelsApiUrl + '/rooms', room);
  }
  
  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.metHotelsApiUrl + '/rooms');
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(this.metHotelsApiUrl + '/rooms/' + id);
  }

  addReservation(room: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.metHotelsApiUrl + '/reservations', room);
  }
  
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.metHotelsApiUrl + '/reservations');
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(this.metHotelsApiUrl + '/reservations/' + id);
  }

}