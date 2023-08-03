import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import {HomeComponent} from './MyComponents/home/home.component'
import { SignupComponent } from './MyComponents/signup/signup.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { CheckoutComponent } from './MyComponents/checkout/checkout.component';
import { MoviesComponent } from './MyComponents/movies/movies.component';
import { ImageSliderComponent } from './MyComponents/image-slider/image-slider.component';
import { MovieSectionComponent } from './MyComponents/movie-section/movie-section.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ComedyShowSectionComponent } from './MyComponents/comedy-show-section/comedy-show-section.component';
import { HttpClientModule } from '@angular/common/http';
import { EventsSectionComponent } from './MyComponents/events-section/events-section.component';
import { SidebarComponent } from './MyComponents/sidebar/sidebar.component';
import { MovieListComponent } from './MyComponents/movielist/movielist.component';
import { SingleMovieComponent } from './MyComponents/single-movie/single-movie.component';
import { TicketBookingComponent } from './MyComponents/ticket-booking/ticket-booking.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModalComponent } from './MyComponents/rating-modal/rating-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CheckoutComponent,
    MoviesComponent,
    ImageSliderComponent,
    MovieSectionComponent,
    ComedyShowSectionComponent,
    EventsSectionComponent,
    SidebarComponent,
    MovieListComponent,
    SingleMovieComponent,
    TicketBookingComponent,
    RatingModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    MatDialogModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
