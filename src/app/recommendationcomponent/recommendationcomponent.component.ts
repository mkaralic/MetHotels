import { Component, Input } from '@angular/core';
import { Recommendation } from './recommendation.model';

@Component({
  selector: 'app-recommendationcomponent',
  templateUrl: './recommendationcomponent.component.html',
  styleUrls: ['./recommendationcomponent.component.css']
})
export class RecommendationcomponentComponent {
  @Input() recommendations: Recommendation[];
}
