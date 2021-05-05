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
   imageUrl: string =null;

   onFileSelected(event){
     if(event.target.files){
       var reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])
       reader.onload = (event: any )=>{
         this.imageUrl = event.target.result
        //  var image = this.imageUrl;
         console.log("url :", this.imageUrl)
       }
       
     }
    // this.selectedFile = <File> event.target.files[0];
  }

  // selectedFile : File = null;



  blogForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    tags: new FormControl(''),
    image: new FormControl(''),
  });

  constructor(private http: BlogsServiceService) { }

  ngOnInit(): void {
  }

  


  onSubmit(data: any) {
    console.log(data);

    // const fb = new FormData();
    //  fb.append('image', this.selectedFile, this.selectedFile.name);  

    //  console.log(fb);

     this.http.postData(data).subscribe(data => {
      console.log(data);
    })

    // this.http.postData(data).subscribe(data => {
    //   console.log(data);
    // })
  }

  // showPreview(event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.blogForm.patchValue({
  //     image: file
  //   });
  //   this.blogForm.get('image').updateValueAndValidity()

 
  //   // File Preview
  //   const reader = new FileReader();
  //   reader.onload = (event: any) => {
  //     this.imageUrl = reader.result as string;
  //   }
  //   reader.readAsDataURL(file)

  // }

  

}
