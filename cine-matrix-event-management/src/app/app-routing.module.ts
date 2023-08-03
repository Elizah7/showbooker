import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { MoviesComponent } from './MyComponents/movies/movies.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { ComedyShowSectionComponent } from './MyComponents/comedy-show-section/comedy-show-section.component';
import { EventsSectionComponent } from './MyComponents/events-section/events-section.component';
import { SingleMovieComponent } from './MyComponents/single-movie/single-movie.component';
import { TicketBookingComponent } from './MyComponents/ticket-booking/ticket-booking.component';
import { RatingModalComponent } from './MyComponents/rating-modal/rating-modal.component';
const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'comedy_shows', component: ComedyShowSectionComponent },
  { path: 'events', component: EventsSectionComponent },
  { path: 'movies/:id', component: SingleMovieComponent },
  {path:"movies/:id/ticketbooking",component:TicketBookingComponent},
  {path:"movies/:id/rating",component:RatingModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
