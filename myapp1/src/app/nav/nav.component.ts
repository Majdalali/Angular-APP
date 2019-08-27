import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgFlashMessageService } from 'ng-flash-messages';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router"
import {faUserCircle  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  faUserCircle = faUserCircle;
  constructor(
    private Flashmsg:NgFlashMessageService,
    private authservices:AuthService,
    private router:Router) { }
  onlogOut() {
    this.authservices.logOut();
    this.Flashmsg.showFlashMessage({
      messages: ["You logged out"], 
      dismissible: true, 
      timeout: 2000,
      type: 'success',
      
    });
    this.router.navigate(['./login']);
    return false;
  }
  ngOnInit() {
    // BLACK NAV SCROLL DOWN
    $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 20) {
         $(".nav1").css("background" , "	#f4f4f4"); 
         $(".nav1").css("color" , "	rgb(0, 0, 0)"); 
         
      }
      else  {
         $(".nav1").css("background" , "transparent");
         $(".nav1").css("color" , "	white");
        
      }
      if (scroll > 100) {
         $(".nav1 li").css("padding-bottom" , "5px"); 
      }
      else {
        $(".nav1 li").css("padding-bottom" , "20px");
      }
      
    })
    
})
  // WHITE MY APP COLOR
    $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 20) {
          
         $(".white").css("color" , "	black"); 
        $(".iconus").css("color","black");
        $(".dropdown-content").css("background-color","#6195ff")
      }
      else  {
        
         $(".white").css("color" , "	white"); 
         $(".iconus").css("color","white")
         $(".dropdown-content").css("background-color","#1c1d21")
      }
      if (scroll > 100) {
         $(".white").css("padding-top" , "18px"); 
      }
      else {
        $(".white").css("padding-top" , "18px");
      }
    })
})
  // A COLOR
  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 20) {
        
         $(".a").css("color" , "	black");
         
         
        
      }
      else  {
        
         $(".a").css("color" , "	white");
        
      }
      
    })
   
    $(".a").hover(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 20 ) {
        $(".a").hover(function(){
          $(this).css("color", "purple");
          }, function(){
          $(this).css("color", "black");
        });
        
      }else {
        $(".a").hover(function(){
          $(this).css("color", "purple");
          }, function(){
          $(this).css("color", "white");
        });
      }},
    );
})



}}
