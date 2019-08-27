import { Component, OnInit, NgModule,  } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {
 storedPost = [];
  

 onPostadded(post) {
  this.storedPost.push(post);
 }
  constructor() { }

  ngOnInit() {
  }
 
  storeposthere(){
    // localStorage.setItem(post)
  }
}
