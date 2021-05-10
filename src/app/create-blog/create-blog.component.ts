import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { BlogsServiceService } from '../blogs-service.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  // imageurl = null;
  // imageUrl: string;
  // imageUrl: string = null;

  

  blogForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    tags: new FormControl(''),
    image: new FormControl(''),
  });

  constructor(private http: BlogsServiceService) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    const file = event.target.files[0];

    this.blogForm.setValue['image'] = file.name;

    this.blogForm.controls.image = file.name;



    // this.blogForm.controls.image = file;
    console.log("aa",file.name);
    console.log("ab",this.blogForm.controls.image);
  }

  onSubmit(data: any) {
    console.log(data.image);

    // data.image = this.blogForm.controls.image

   

    //   this.http.postBlog(data).subscribe(data => {
    //   console.log(data);
    // })


  }
}
