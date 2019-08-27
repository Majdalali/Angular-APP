import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
 

  constructor(
    private authservices:AuthService,
    private router:Router) { }

    canActivate() :boolean {
      if(this.authservices.display()) {
        return true;
      }else {
        this.router.navigate(['./login'])
        return false;
      }
    }
    
}
