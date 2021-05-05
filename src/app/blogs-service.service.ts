import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogsServiceService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get('http://localhost:3000/blogs');
    
  }

  postData(blogdata : any){
    return this.httpClient.post('http://localhost:3000/blogs', blogdata);
    
  }

  getDatawithid(data : any){
    return this.httpClient.get('http://localhost:3000/blogs?id='+data);
    
  }


}
