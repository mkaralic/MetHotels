import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor() { }

  getPrice(numberOfNights: number): number {
    return 4800 * numberOfNights;
  }
}
