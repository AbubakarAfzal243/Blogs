import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { BlogsServiceService } from '../blogs-service.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Blog } from '../blog.model';

export interface Tags {
  name: string;
}
interface Category {
  value: string;
}
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  Category: Category[] = [
    {value: 'Technology'},
    {value: 'Lifestyle'},
    {value: 'Food'},
    {value: 'Entertainment'},
    {value: 'Sports'},
    {value: 'Fitness'},
    {value: 'Music'},
    {value: 'Travel'}
  ];

   tag : Tags[] =  [];
   imageUrl: string;
  // imageUrl: string = null;
  blogForm : FormGroup;
  status: any ={};
  submitted = false;

  urls=[];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  tags: Tags[] = [
    
  ];

  constructor(private http: BlogsServiceService, 
              private router: Router,
              private route: ActivatedRoute, 
              private fb:FormBuilder, 
              private toastr: ToastrService) { 

    this.blogForm = fb.group({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      tags: this.fb.array([
        
      ], Validators.required),
    });
  }

  ngOnInit(): void {
    var _id = this.route.snapshot.params._id;

    // console.log("id by edit Param : ", _id)

    this.http.getDatawithid(_id).subscribe(data => {
      this.status = data;
      // console.log("user ID",this.status.uname)
      // console.log("edit BLof", this.status)
    })
    // this.http.editBlog(_id).subscribe(data => {
    //   this.status = data;

      //  this.status.image = this.imageURL;
      // console.log("scsdsdfdd", this.status.image);
      // console.log("user ID", this.status.uid)
      // this.user_id = this.status.uid;
      // console.log("inside", this.user_id)
      // console.log(this.status)

    // })
  }

  get f() { return this.blogForm.controls; }

  

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
      this.blogForm.value.tags = this.tags;

      // console.log("tag value", this.blogForm.value.tags);
      
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
    console.log("file", this.blogForm.value.image)
    this.imageUrl = file.name;
  }

  onSubmit() {
    // console.log(this.blogForm.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.blogForm.invalid) {
        return;
    }

    var _id = this.route.snapshot.params._id;

    // console.log("id by edit Param : ", _id)

    this.blogForm.value.tags = this.tags;
    this.blogForm.value.image = this.imageUrl;

    // console.log("final tag vlaue : ", this.blogForm.value.tags);
    
    // console.log("for m blog", this.blogForm.value.image);

    // console.log("finsl vdv",this.blogForm.value);

    // console.log("After",this.blogForm.value.image);
    
      //   this.http.postBlog(this.blogForm.value).subscribe(data => {
      //     this.toastr.success('Successfully Blog Create!')
      //     this.router.navigateByUrl('blogs');
      // })

      //    this.http.updateBlog(this.blogForm.value, _id ).subscribe(data => {
      //      console.log("update Blog Data", data);
           
      //     this.toastr.success('Successfully Blog Update!')
         
      //     this.router.navigateByUrl('blogs');
      // })

    


  }
}
