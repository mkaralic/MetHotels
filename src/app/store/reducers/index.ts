import { OfferState } from "../state/offer.state";
import { RecommendationState } from "../state/recommendation.state";
import { ReservationState } from "../state/reservation.state";
import { RoomState } from "../state/room.state";

export interface AppState {
    offer: OfferState;
    recommendation: RecommendationState;
    reservation: ReservationState;
    room: RoomState;
}

