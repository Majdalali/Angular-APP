import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router"
import { FormBuilder , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name : string;
  username: string;
   success: boolean;
  email: string;
  password : string;
  constructor(private validateServices: ValidateService,
     private Flashmsg:NgFlashMessageService,
    private authservices:AuthService,
    private router:Router,
    private fb : FormBuilder
     ) { }


     myForm :  FormGroup;

  ngOnInit() {

    // FORM BUILD
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

  // REGISTER USER 

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username : this.username,
      email : this.email,
      password : this.password
    }
    
    if(!this.validateServices.validateRegister(user)) {
      
      this.Flashmsg.showFlashMessage({
        messages: ["Fill all fields please"], 
        dismissible: true, 
        timeout: 2000,
        type: 'danger',
        
      });
      return false;
    }
    if(!this.validateServices.validateEmail(user.email)) {
      this.Flashmsg.showFlashMessage({
        messages: ["Enter a valid email please"], 
        dismissible: true, 
        timeout: 2000,
        type: 'danger'
        
      });
      return false;
    }
    
    this.authservices.registerUser(user).subscribe(data => {
      if(data) {
        this.Flashmsg.showFlashMessage({
          messages: ["You are now registered "], 
          dismissible: true, 
          timeout: 2000,
          type: 'success', 
        });
        this.router.navigate(['/login'])
      }else {
        this.Flashmsg.showFlashMessage({
          messages: ["Something went wrong!"], 
          dismissible: true, 
          timeout: 2000,
          type: 'danger', 
        });
        this.router.navigate(['/register'])
      }
    })
  }
}
