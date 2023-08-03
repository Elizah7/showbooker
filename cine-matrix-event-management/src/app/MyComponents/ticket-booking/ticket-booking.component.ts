import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/cinema-service.service.spec';


interface Cinema {
  name: string;
  shows: Show[];
}

interface Show {
  time: string;
}

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  cinemas: Cinema[] = [];
  languages: string[] = ['English', 'Hindi', 'Tamil', 'Telugu'];
  selectedDate: string = '';
selectedShowTime: string = '';
selectedCinemaHall: string = '';
selectedLanguage: string = '';
selectedDateIndex: number = -1;
selectedShowTimeIndex: number = -1;
selectedCinemaHallIndex: number = -1;
selectedLanguageIndex: number = -1;
  // Function to get the dates for the next 7 days
  getDates(): string[] {
    const dates: string[] = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toDateString());
    }
    return dates;
  }

  constructor(private cinemaService: CinemaService,private http: HttpClient) {}

  ngOnInit(): void {
    this.cinemas = this.cinemaService.getCinemas();
  }
  onDateSelect(date: string, index: number): void {
    this.selectedDateIndex = index;
    this.selectedDate = date;
  }
  onShowTimeSelect(showTime: string): void {
    this.selectedShowTime = showTime;
  }
  
  onLanguageSelect(language: string): void {
    this.selectedLanguage = language;
  }

  onBookNow(): void {
    // Create an object with the selected information
    const bookingData = {
      date: this.selectedDate,
      showTime: this.selectedShowTime,
      cinemaHall: this.selectedCinemaHall,
      language: this.selectedLanguage,
    };
  console.log(bookingData)
    // Make the POST request to the backend with the bookingData
    this.http.post('your-backend-url', bookingData).subscribe(
      (response:any) => {
        console.log('Booking successful!', response);
        // Add any additional logic or handling of the response here
      },
      (error:any) => {
        console.error('Error in booking:', error);
        // Handle any errors here
      }
    );
  }

}
