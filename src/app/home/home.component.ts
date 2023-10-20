import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
check:any=false
moviedata:any=""
search=this.fb.group({
  movie:['']
})
constructor(private fb:FormBuilder, private ds:FilmService){}

ngOnInit():void{
  this.check=false
}
movie(){
  var movie=this.search.value.movie
  console.log(movie);
  this.ds.movieSearch(movie).subscribe(data=>{
    this.moviedata=data
    this.check=true
  })
  
}
}
