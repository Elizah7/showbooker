import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sliderImages: string[] = [
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1689679473819_horrordesktop.jpg',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1688970894022_bigweb.jpg',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1688363625984_delhitheatredesktop.jpg',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1689060789408_fatimaayeshadesktop.jpg',
  ];
}
