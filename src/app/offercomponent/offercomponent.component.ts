import { Component, Input } from '@angular/core';
import { Offer } from './offer.model';

@Component({
  selector: 'app-offercomponent',
  templateUrl: './offercomponent.component.html',
  styleUrls: ['./offercomponent.component.css']
})
export class OffercomponentComponent {
  @Input() offers: Offer[];

}
