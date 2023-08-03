import { Component } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.css']
})
export class RatingModalComponent {
  userRating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];
  movieId : string = ""
  constructor(private apiService: ApiService,private route: ActivatedRoute,private router: Router) { }
  onStarClick(rating: number): void {
    this.userRating = rating;

  }
  onRatingSubmit(){
      this.route.paramMap.subscribe(params => {
        this.movieId = params.get('id')!;
        this.updateMovieDetails(this.movieId)
        // For example: this.movie = this.movies.find(movie => movie.id === movieId);
      });
  }
  updateMovieDetails(movieId:string){
    this.apiService.updatesinglemovie(movieId,this.userRating).subscribe(
      (response: any) => {
        alert("Your rating has been saved")
        this.router.navigate(['movies', this.movieId]);
      },
      (error: any) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }
}
