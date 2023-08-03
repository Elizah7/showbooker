import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Movie } from '../movieShema';
// import { Console } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  moviesList: Movie[] = [];
  ngOnInit(): void {
    // Code to execute on component initialization (page load)
    this.makeAnotherGetRequest();
   
  }

  // Existing methods...

  constructor(private apiService: ApiService) { }

  makeAnotherGetRequest():void {
    this.apiService.getmovieData().subscribe(
      (response:any) => {
      this.moviesList = response.movies
      console.log(this.moviesList)
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

}
