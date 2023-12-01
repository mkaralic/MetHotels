import { createAction } from "@ngrx/store";

export const getRooms = createAction('[Rooms component] getRooms');
export const addRoom = createAction('[Rooms component] addRoom');
export const deleteRoom = createAction('[Rooms component] deleteRoom');