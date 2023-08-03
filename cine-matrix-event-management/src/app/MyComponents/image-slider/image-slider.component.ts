import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements AfterViewInit, OnDestroy {
  @Input() images: string[] = [];
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  swiper: Swiper | null = null;

  ngAfterViewInit() {
    setTimeout(() => {
      this.initSwiper();
    }, 0);
  }

  initSwiper() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  ngOnDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
      this.swiper = null;
    }
  }
}
