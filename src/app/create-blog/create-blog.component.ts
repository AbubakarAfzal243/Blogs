import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { BlogsServiceService } from '../blogs-service.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  image = null;

  handleFileInput(event : any) {
   console.log(event);
   this.image = event.target.files[0];
   console.log("sdcsd", this.image)
}

  blogForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    tags: new FormControl(''),
    image: new FormControl(''),
  });

  constructor(private http: BlogsServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(data : any) {
    console.log(data);
    
    this.http.postData(data).subscribe(data =>{
      console.log(data);
    })
  }

}
