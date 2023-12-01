import { createSelector } from "@ngrx/store";

function selectRecommendations(state: any) {
    return state.recommendation;
}

export const selectedRecommendations = createSelector(
    selectRecommendations,
    (state: any) => {
        return state?.recommendations;
    }
)