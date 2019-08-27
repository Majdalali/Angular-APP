import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders }    from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  blogpost:any;
  constructor(private http:HttpClient,
     ) { }

  registerUser(user) {
    let headers = new HttpHeaders(); 
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user , {headers : headers})
    .pipe(map(res => res));
  }
 
  authenticateUser(user) {
    let headers = new HttpHeaders(); 
      headers.append('Content-type', 'application/json');
      return this.http.post('http://localhost:3000/users/authenticate', user , {headers : headers})
      .pipe(map(res => res));
  }
  getProfile() {
    
    const headers = new HttpHeaders({ 
      "Content-Type": "application/json", 
      Authorization: this.authToken 
      }); 
      this.loadToken();
    return this.http.get('http://localhost:3000/users/profile', {headers : headers})
    .pipe(map(res => res));
  }
  storedBlogPosts(blogpost) {
    localStorage.setItem('blogpost', JSON.stringify(blogpost))
  }
 
  storeUserData(token , user){
    localStorage.setItem('id_token' , token);
    localStorage.setItem('profile', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
loadToken(){
  const token = localStorage.getItem('id_token')
  this.authToken = token;
  
}
display() {
  return !!localStorage.getItem('id_token')
}
checkToken(){
  return localStorage.getItem('id_token')
}
  logOut() {
    this.user = null;
    this.authToken = null;
    localStorage.clear();
  }
}
  