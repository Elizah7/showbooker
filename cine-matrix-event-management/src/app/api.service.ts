import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://example.com/api'; 

  constructor(private http: HttpClient) { }

  signUp(data: any) {
    const url = `${this.baseUrl}/signup`;
    return this.http.post(url, data);
  }
}
