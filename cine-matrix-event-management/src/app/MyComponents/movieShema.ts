export interface Movie {
    _id: string; 
    title: string;
    description: string;
    timings: string[];
    ratings: number[]; 
    cast: string[]; // An array of cast members
    director: string;
    language: string[]; // An array of languages the movie is available in
    release_date: string; // Assuming release date is stored as a string
    image: string; // URL or path to the movie's image
  }
  