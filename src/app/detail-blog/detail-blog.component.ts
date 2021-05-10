import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from '../blog.model';
import { BlogsServiceService } from '../blogs-service.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {

  status : any="";

  id : any ="";

  a : any;


  constructor(private route: ActivatedRoute, private httpService: BlogsServiceService) {}

  ngOnInit() {
    var _id = this.route.snapshot.params._id;
    var params={id:_id}

     console.log("id by Param : ",_id)
;
    this.httpService.getDatawithid(_id).subscribe(data => {
       this.status = data;

        console.log(this.status)
    })  
    
  }

  // editBlog(blog : Blog){
  //    this.httpService.selectBlog = blog; 
  // }


  // constructor(private httpService: BlogsServiceService) { }

  // ngOnInit(): void {
  //   this.httpService.getData().subscribe(data => {
  //     this.status = data;

  //     console.log(this.status)
  //   })
  // }

}
