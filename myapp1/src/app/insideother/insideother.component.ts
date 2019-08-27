import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-insideother',
  templateUrl: './insideother.component.html',
  styleUrls: ['./insideother.component.scss']
})
export class InsideotherComponent implements OnInit {
  lists = [
    {"id": 1 , "name": "ALPHA"},
    {"id": 2 , "name": "DELTA"},
    {"id": 3 , "name": "GAMMA"}
  ]
  
  constructor( private router : Router) { }

  ngOnInit() {
    
  }
onClick(list){
  this.router.navigate(['/movies/movie', list.id ]);
}
}
