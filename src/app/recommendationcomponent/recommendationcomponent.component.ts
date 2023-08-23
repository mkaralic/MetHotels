import { Component, Input } from '@angular/core';
import { Recommendation } from './recommendation.model';

@Component({
  selector: 'app-recommendationcomponent',
  templateUrl: './recommendationcomponent.component.html',
  styleUrls: ['./recommendationcomponent.component.css']
})
export class RecommendationcomponentComponent {
  @Input() recommendations: Recommendation[];

  constructor() {
    this.recommendations = [
      { name: 'Nocenje sa doruckom', price: 5600.00 },
      { name: 'Polupansion', price: 6400.00 },
    ];
  }
}
