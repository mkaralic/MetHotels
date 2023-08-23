import { Component, Input } from '@angular/core';
import { Offer } from './offer.model';

@Component({
  selector: 'app-offercomponent',
  templateUrl: './offercomponent.component.html',
  styleUrls: ['./offercomponent.component.css']
})
export class OffercomponentComponent {
  @Input() offers: Offer[];

  constructor() {
    this.offers = [
      { title: 'Nocenje', price: 4800.00 },
      { title: 'Dorucak', price: 600.00 },
      { title: 'Rucak', price: 1800.00 },
      { title: 'Vecera', price: 1600.00 },
    ];
  }
}
