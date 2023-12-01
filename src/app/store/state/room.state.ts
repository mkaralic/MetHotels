import { Room } from "src/app/interfaces/room";

export interface RoomState {
    rooms: Array<Room>;
}

export const initialRoomState: RoomState = {
    rooms: []
};