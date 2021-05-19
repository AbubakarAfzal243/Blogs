import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, } from '@angular/forms';
import { BlogsServiceService } from '../blogs-service.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export interface Tags {
  name: string;
}
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

   tag : Tags[] =  [];
   imageUrl: string;
  // imageUrl: string = null;
  blogForm : FormGroup;

  urls=[];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  tags: Tags[] = [
    
  ];

  constructor(private http: BlogsServiceService, private router: Router, private fb:FormBuilder, private toastr: ToastrService) { 
    this.blogForm = fb.group({
      title: new FormControl(''),
      content: new FormControl(''),
      
      image: new FormControl(''),
      tags: this.fb.array([
        
      ]),
    });
  }

  ngOnInit(): void {
  }

  

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
      this.blogForm.value.tags = this.tags;

      console.log("tag value", this.blogForm.value.tags);
      
    }


    // Reset the input value
    if (input) {
      input.value = '';
      
    }
  }

  remove(fruit: Tags): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  onFileSelected(event) {

   
    const file = event.target.files[0];

    this.blogForm.value.image = file.name;

    // this.imageUrl = file.name;

    console.log("aa",file.name);
    console.log("ab",this.blogForm.value.image);

    // if(event.target.files){
    //   for(let i=0; i<File.length; i++){
    //     var reader = new FileReader();
    //     reader.readAsDataURL(event.target.files[i]);
    //     reader.onload = (events : any)=>{
    //       this.urls.push(events.target.result);
    //     }
    //   }
    // }
    // console.log("urlsss", this.urls);
    
  }

  onSubmit() {
    console.log(this.blogForm.value);

    this.blogForm.value.tags = this.tags;

    console.log("final tag vlaue : ", this.blogForm.value.tags);
    
    console.log("for m blog", this.blogForm.value.image);

    console.log("finsl vdv",this.blogForm.value);

    console.log("After",this.blogForm.value);
    
        this.http.postBlog(this.blogForm.value).subscribe(data => {
          this.toastr.success('Successfully Blog Create!')
      })

    // this.router.navigateByUrl('login');


  }
}
