import { Reservation } from "src/app/interfaces/reservation";

export interface ReservationState {
    reservations: Array<Reservation>;
}

export const initialReservationState: ReservationState = {
    reservations: []
}
