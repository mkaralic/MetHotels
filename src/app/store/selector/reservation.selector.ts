import { createSelector } from "@ngrx/store";

function selectReservations(state: any) {
    return state.reservation;
}

export const selectedReservations = createSelector(
    selectReservations,
    (state: any) => {
        return state?.reservations;
    }
)