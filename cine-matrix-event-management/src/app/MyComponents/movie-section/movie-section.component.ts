
import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.css']
})
export class MovieSectionComponent implements OnInit {
  @ViewChild('carousel', { static: false }) carousel!: CarouselComponent;
  movies = [
    {
      id: 1,
      title: 'Oppenhimer',
      genre: 'Biography/Drama',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MzkzLjFLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347867-jylnkbfyan-portrait.jpg'
    },
    {
      id: 2,
      title: 'Baipan Dhari Deva ',
      genre: 'Comedy/Drama',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICAyMi44SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355365-lzflppmver-portrait.jpg'
    },
    {
      id: 3,
      title: 'Barbie',
      genre: 'Comedy/Fantsy',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTYxLjVLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00072466-kwewqvtsdf-portrait.jpg'
    },
    {
      id: 4,
      title: 'Ajmer 92',
      genre: 'Crime/Drama',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTFLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00360617-dbpzmfxhfz-portrait.jpg'
    },
    {
      id: 5,
      title: 'Ajmer 92',
      genre: 'Crime/Drama',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTFLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00360617-dbpzmfxhfz-portrait.jpg'
    },
  ];
  itemsPerSlide = 5;
  currentSlideIndex = 0;

  slideLeft() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = this.movies.length - this.itemsPerSlide;
    }
  }

  slideRight() {
    if (this.currentSlideIndex < this.movies.length - this.itemsPerSlide) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }
  }

  ngOnInit() {
    document.addEventListener('keydown', this.handleArrowKeys.bind(this));
  }

  handleArrowKeys(event: KeyboardEvent) {
    if (event.keyCode === 37) {
      this.slideLeft();
    } else if (event.keyCode === 39) {
      this.slideRight();
    }
  }
}
