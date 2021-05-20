import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsServiceService {
  selectBlog : Blog;
  blogs : Blog[];

  readonly basedURL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  postBlog(blog : Blog){
    return this.httpClient.post(this.basedURL, blog,{
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getBlog(){
    return this.httpClient.get(this.basedURL);
  }

  getDatawithid(id : any){
    return this.httpClient.get(this.basedURL+'/details?id='+id,{
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
    
  }

  //   getUserData(id : any){
  //   return this.httpClient.get(this.basedURL+'/user?id='+id);
    
  // }


  // getData(){
  //   return this.httpClient.get('http://localhost:3000/blogs');
    
  // }

  // postData(blogdata : any){
  //   return this.httpClient.post('http://localhost:3000/blogs', blogdata);
    
  // }

  // getDatawithid(data : any){
  //   return this.httpClient.get('http://localhost:3000/blogs?id='+data);
    
  // }


}
