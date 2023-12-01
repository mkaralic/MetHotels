import { createSelector } from "@ngrx/store";

function selectOffers(state: any) {
    return state.offer;
}

export const selectedOffers = createSelector(
    selectOffers,
    (state: any) => {
        return state?.posts;
    }
)