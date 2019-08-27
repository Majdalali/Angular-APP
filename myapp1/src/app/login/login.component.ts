import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router"
import { FormBuilder , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : string;
  password : string;
  constructor(
    private fb : FormBuilder,
   private Flashmsg:NgFlashMessageService,
    private authservices:AuthService,
    private router:Router
    ) { }
    myForm :  FormGroup;
  ngOnInit() {
    this.myForm = this.fb.group({
      email:['', [
        Validators.required,
        Validators.email
      ]],
      password:['', [
        Validators.required,
        Validators.pattern('^(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]]

    })
  }
  get email1() {
    return this.myForm.get('email');
  }

  get password1() {
    return this.myForm.get('password');
  }

  onLoginSubmit() {
    const user = {
      email : this.email,
      password : this.password

    }
    this.authservices.authenticateUser(user).subscribe(data => {
      if(data){
        this.authservices.storeUserData(data['token'], data['user']);
      }
      if(data['user']) {
        
        this.Flashmsg.showFlashMessage({
          messages: ["You logged in "], 
          dismissible: true, 
          timeout: 1000,
          type: 'success', 
        });
        this.router.navigate(['/dashboard'])
      }else {
        this.Flashmsg.showFlashMessage({
          messages: ["Email or Password is wrong!"], 
          dismissible: true, 
          timeout: 2000,
          type: 'danger', 
        });
        this.router.navigate(['/login'])
      }
      
    });
  }
}
