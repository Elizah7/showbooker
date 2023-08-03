import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:5000'; 

  constructor(private http: HttpClient ) { }

  signUp(data: any) {
    const url = `${this.baseUrl}/signup`;
    return this.http.post(url, data);
  }
  login(data: any) {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, data);
  }

  getmovieData() {
    const url = `${this.baseUrl}/data?category=movie`;
    return this.http.get(url);
  }

  getcomedyData() {
    const url = `${this.baseUrl}/data?category=comedyshow`;
    return this.http.get(url);
  }


  getsinglemovie(movieId:string){
    const url = `${this.baseUrl}/data/${movieId}`;
    return this.http.get(url);
  }
  
  getsinglemovievideos(query:string){
    let api = "AIzaSyBc9NjwyKgDOssjPhD4YK-3kdBjFlTTLXc";
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${api}`;
    return "hi"

  }
  updatesinglemovie(movieId: string, userRating: number): Observable<any> {
    const url = `${this.baseUrl}/data/${movieId}`;
    const body = { "rating":userRating }; // Data to be sent in the PATCH request body

    return this.http.patch(url, body);
  }
}
