import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  selectBlog : User;
  user : User[];

  loggedInStatus = false

  readonly basedURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    if(localStorage.getItem('some-key')!== null){
      this.loggedInStatus = value;
    }
    
  }

  get isLoggedIn(){
    // return this.loggedInStatus
    if(localStorage.getItem('some-key')!== null){
      return this.loggedInStatus = true;
    }
    else{
      return this.loggedInStatus = false;
    }
  }
      // Register User
  postUser(user: User){
    return this.http.post(this.basedURL+"/register" ,user)
  }

  // getUserData(id : any){
  //   return this.http.get(this.basedURL+'/user?id='+id);
    
  // }


// Login User
  loginUser(user: any){
    return this.http.post(this.basedURL+"/login" ,user,{
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  // Logout User
  logoutUser(){
    return this.http.get(this.basedURL+"/logout",{
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
