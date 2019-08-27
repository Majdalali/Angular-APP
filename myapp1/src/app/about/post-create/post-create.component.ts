import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  titleValue : "";
  contantValue : "";
  

 
  @Output() postCreated = new EventEmitter();
  // posts = [
  //   {title:"post title1",contant:"bla bla bla bla bla bla"},
  //   {title:"post title2",contant:"HA HA HA"},
  //   {title:"post title3",contant:"NICE POST BITCH!"}

  // ];
 
  onSignedUp(form :NgForm) {
    if (form.invalid){
      return alert('Please Fill both ')
      
    }
    
      const post = {
       title : form.value.title,
       contant : form.value.contant
     };
     this.postCreated.emit(post);
     form.resetForm();
     
 
  };
  
  

  
  constructor() { }

  ngOnInit() {
    
  }

}

  
