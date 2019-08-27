import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  validateRegister(user){
    if(user.name == undefined || user.username == undefined || user.password == undefined || user.email == undefined ) {
      return false;
    }else {
      return true;
    }
  }
  validateRegisterName(user){
    if(user.name == undefined  ) {
      return false;
    }else {
      return true;
    }
  }
  validateRegisterUser(user){
    if( user.username == undefined ) {
      return false;
    }else {
      return true;
    }
  }
  validateRegisterPass(user){
    if( user.password == undefined ) {
      return false;
    }else {
      return true;
    }
  }
  validateRegisterEmail(user){
    if( user.email == undefined ) {
      return false;
    }else {
      return true;
    }
  }
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
