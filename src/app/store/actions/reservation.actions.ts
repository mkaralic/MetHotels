import { createAction } from '@ngrx/store'

export const getReservations = createAction('Reservation component] getReservations');
export const addReservation = createAction('Reservation component] addReservation');
export const deleteReservation = createAction('Reservation component] deleteReservation');

export type ReservationActions = getReservations | addReservation | 