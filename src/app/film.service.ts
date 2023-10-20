import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) { }

  movieSearch(movie:any){
    return this.http.get(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${movie}`)
  }
}
