import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap , Router} from '@angular/router';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
  public movieList;
  constructor( private route : ActivatedRoute, private router : Router ) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.movieList = id;
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.movieList = id;
    })
  }
  onPrevious(){
    let previousId = this.movieList - 1;
    this.router.navigate(['/movies/movie', previousId])
  }
  onNext(){
    let nextId = this.movieList + 1;
    this.router.navigate(['/movies/movie', nextId])
  }
}
