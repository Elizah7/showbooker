
import { ActivatedRoute,Router  } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';;
@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent {
  stars: number[] = [1, 2, 3, 4, 5];

  userRating: number = 0;
  movie: any; 
  moviesvideos:any;
  movieId :string =""

  constructor(private modalService: NgbModal,private apiService: ApiService,private route: ActivatedRoute,private router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id')!;
      this.getMovieDetails(this.movieId)
      // For example: this.movie = this.movies.find(movie => movie.id === movieId);
    });

  }


  getMovieDetails(movieId: string): void {
    this.apiService.getsinglemovie(movieId).subscribe(
      (response: any) => {
        this.movie = response;
        console.log('Movie Details:', this.movie);
        this.getMoviesVideos(this.movie.title)
      },
      (error: any) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }
  getMoviesVideos(name:string):void{
    // this.apiService.getsinglemovievideos(name).subscribe(
    //   (response:any) =>{
    //     this.moviesvideos = response
    //     console.log(this.moviesvideos)
    //   },
    //   (error: any) => {
    //     console.error('Error fetching movie details:', error);
    //   }
    // )

  }
  getAverageRating(ratings: number[]): number {
    if (!ratings || ratings.length === 0) {
      return 0;
    }

    const totalRating = ratings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = totalRating / ratings.length;
    return Number(averageRating.toFixed(1)); // Display one number after the decimal point
  }
  onButtonClick() {
    // Navigate to the destination page
    this.router.navigate(['movies', this.movieId, 'ticketbooking']);
  }

  openModal(){
    this.router.navigate(['movies', this.movieId, 'rating']);
  }
}
