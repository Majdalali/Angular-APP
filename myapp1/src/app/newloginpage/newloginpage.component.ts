import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { NgFlashMessageService } from 'ng-flash-messages';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-newloginpage',
  templateUrl: './newloginpage.component.html',
  styleUrls: ['./newloginpage.component.scss']
})
export class NewloginpageComponent implements OnInit {
  email : string;
  password : string;
  constructor(private fb : FormBuilder,private Flashmsg:NgFlashMessageService,
    private authservices:AuthService,
    private router:Router) { }
  myForm :  FormGroup;
  ngOnInit() {
    this.myForm = this.fb.group({
      name:['',[
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      username:['',[
        Validators.required,
        Validators.pattern('[0-9a-zA-Z ]*'),
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],
      email:['', [
        Validators.required,
        Validators.email
      ]],
      password:['', [
        Validators.required,
        Validators.pattern('^(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]]

    })
  } 
  get name1() {
    return this.myForm.get('name');
  }

  get username1() {
    return this.myForm.get('username');
  }
  get email1() {
    return this.myForm.get('email');
  }

  get password1() {
    return this.myForm.get('password');
  }
}
