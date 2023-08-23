import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomscomponentComponent } from './roomscomponent/roomscomponent.component';
import { ReservationComponent } from './reservation/reservation.component';
import { OffercomponentComponent } from './offercomponent/offercomponent.component';
import { RecommendationcomponentComponent } from './recommendationcomponent/recommendationcomponent.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  { path: 'rooms', component: RoomscomponentComponent },
  { path: '', redirectTo: 'rooms', pathMatch: 'full'},
  { path: 'reservations', component: ReservationComponent },
  { path: 'offer', component: OffercomponentComponent },
  { path: 'recommendation', component: RecommendationcomponentComponent },
  { path: 'about', component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
