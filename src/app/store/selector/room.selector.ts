import { createSelector } from "@ngrx/store";

function selectRooms(state: any) {
    return state.room;
}

export const selectedRooms = createSelector(
    selectRooms,
    (state: any) => {
        return state?.rooms;
    }
)