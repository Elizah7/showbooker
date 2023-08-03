import { Injectable } from '@angular/core';

interface Cinema {
  name: string;
  shows: Show[];
}

interface Show {
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  getCinemas(): Cinema[] {
    return [
      {
        name: 'AMC Empire 25',
        shows: [
          { time: '3:00 PM' },
          { time: '5:30 PM' },
          { time: '8:00 PM' }
        ]
      },
      {
        name: 'Regal Battery Park',
        shows: [
          { time: '4:00 PM' },
          { time: '6:30 PM' },
          { time: '9:00 PM' }
        ]
      },
      {
        name: 'Cinemark Tinseltown',
        shows: [
          { time: '2:30 PM' },
          { time: '5:00 PM' },
          { time: '7:30 PM' }
        ]
      },
      {
        name: 'AMC Lincoln Square 13',
        shows: [
          { time: '4:30 PM' },
          { time: '6:00 PM' },
          { time: '8:30 PM' }
        ]
      },
      {
        name: 'Regal Union Square',
        shows: [
          { time: '3:30 PM' },
          { time: '6:30 PM' },
          { time: '9:30 PM' }
        ]
      },
    ];
  }
}
