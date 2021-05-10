import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.post(this.basedURL, blog);
  }

  getBlog(){
    return this.httpClient.get(this.basedURL);
  }

  getDatawithid(id : any){
    return this.httpClient.get(this.basedURL+'/details?id='+id);
    
  }

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
