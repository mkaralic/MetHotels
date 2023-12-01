import { Recommendation } from "src/app/interfaces/recommendation";

export interface RecommendationState {
    recommendations: Array<Recommendation>;
}

export const initialRecommendationState: RecommendationState = {
    recommendations: [      
        { name: 'Nocenje sa doruckom', price: 5600.00 },
        { name: 'Polupansion', price: 6400.00 }
    ]
}