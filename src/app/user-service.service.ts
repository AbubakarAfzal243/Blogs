import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  selectBlog : User;
  user : User[];

  readonly basedURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  postUser(user: User){
    return this.http.post(this.basedURL+"/register" ,user)
  }

  loginUser(user: any){
    return this.http.post(this.basedURL+"/login" ,user,{
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
