import { Component, Input } from '@angular/core';
import { Movie } from '../movieShema';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovieListComponent {
  @Input() movies: Movie[] = [];
}


