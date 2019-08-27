import { Component, OnInit, Input,  } from '@angular/core';
import AOS from 'aos';
import { faCoffee, faUsers, faFile  } from '@fortawesome/free-solid-svg-icons';
import counterUp from 'counterup2';
import { ValidateService} from '../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router"


declare var require: any
declare var Waypoint: any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name : string;
  username: string;
   success: boolean;
  email: string;
  password : string;
  public date = new Date;
  faCoffee = faCoffee;
  faUsers = faUsers;
  faFile = faFile;
 

 
  
  title = 'myapp1';
  netImage = "/assets/images/f.png";
  netImage1 = "/assets/images/i.png";
  netImage2 = "/assets/images/t.png";
  netImage3 = "/assets/images/h.png";
  netImage4 = "/assets/images/c.png";
  netImage5 = "/assets/images/j.png";
  netImage6 = "/assets/images/1.jpg";
  netImage7 = "/assets/images/2.jpg";
  netImage8 = "/assets/images/3.jpg";
  netImage9 = "/assets/images/4.jpg";
  netImage10 = "/assets/images/5.jpg";
  netImage11 = "/assets/images/6.jpg";
  fa1 = "/assets/images/f1.png";
  fa2 = "/assets/images/f2.png";
  fa3 = "/assets/images/f3.png";
  
  constructor(private validateServices: ValidateService,
     private Flashmsg:NgFlashMessageService,
    private authservices:AuthService,
    private router:Router) { 
    
  }
  
  ngOnInit() {
    AOS.init();
    require( 'waypoints/lib/noframework.waypoints.js' )
  const el2 = document.querySelector( '.counter2' )
  new Waypoint( {
    element: document.querySelector( '.counter2' ),
    handler: function() { 
        counterUp( el2 ) 
        this.destroy()
    },
    offset: 'bottom-in-view',
} )
  require( 'waypoints/lib/noframework.waypoints.js' )
  const el3 = document.querySelector( '.counter3' )
  new Waypoint( {
    element: document.querySelector( '.counter3' ),
    handler: function() { 
        counterUp( el3 ) 
        this.destroy()
    },
    offset: 'bottom-in-view',
} )
  require( 'waypoints/lib/noframework.waypoints.js' )
  var el = document.querySelector( '.counter' )
  new Waypoint( {
    element: document.querySelector( '.counter' ),
    handler: function() { 
        counterUp( el ) 
        this.destroy()
    },
    offset: 'bottom-in-view',
} )





}
// REGISTER
onRegisterSubmit() {
  const user = {
    name: this.name,
    username : this.username,
    email : this.email,
    password : this.password
  }
  
  if(!this.validateServices.validateRegisterName(user)) {
    
    $('.input1').css("border-color","red")
    
    return false;
  }
  if(this.validateServices.validateRegisterName(user)) {
    
    $('.input1').css("border-color","#7971ea")
    
    
  }
  if(!this.validateServices.validateRegisterUser(user)) {
    
    $('.input2').css("border-color","red")
    
    return false;
  }
  if(!this.validateServices.validateRegisterPass(user)) {
    
    $('.input4').css("border-color","red")
    
    return false;
  }
  if(!this.validateServices.validateRegisterEmail(user)) {
    
    $('.input3').css("border-color","red")
    
    return false;
  }
  if(!this.validateServices.validateEmail(user.email)) {
    $('.input3').css("border-color","red")
    return false;
  }
  
  this.authservices.registerUser(user).subscribe(data => {
    if(data) {
      this.Flashmsg.showFlashMessage({
        messages: ["You are now registered "], 
        dismissible: true, 
        timeout: 1000,
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
