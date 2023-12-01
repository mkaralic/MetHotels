import { Offer } from "src/app/interfaces/offer";

export interface OfferState {
    offers: Array<Offer>;
}

export const initialOfferState: OfferState = {
    offers: [
        { title: 'Nocenje', price: 4800.00 },
        { title: 'Dorucak', price: 600.00 },
        { title: 'Rucak', price: 1800.00 },
        { title: 'Vecera', price: 1600.00 },
    ]
}