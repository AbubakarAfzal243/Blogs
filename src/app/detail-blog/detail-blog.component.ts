import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Blog } from '../blog.model';
import { BlogsServiceService } from '../blogs-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {

  status: any = "";

  id: any = "";

  a: any;
  user_id: any;

  constructor(private route: ActivatedRoute, private httpService: BlogsServiceService, private userService: UserServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    var _id = this.route.snapshot.params._id;
    var params = { id: _id }

    // console.log("id by Param : ", _id)
    this.httpService.getDatawithid(_id).subscribe(data => {
      this.status = data;

      //  this.status.image = this.imageURL;
      // console.log("scsdsdfdd", this.status.image);
      // console.log("user ID", this.status.uname)
      // // this.user_id = this.status.uid;
      // // console.log("inside", this.user_id)
      // console.log(this.status)


      // Get User Data
      // this.httpService.getUserData(this.user_id).subscribe(data => {
      //   this.status = data;

      //   console.log("User if in subscribe method", this.user_id)
      // })

    },
    (err) => {
      this.toastr.error('Detail Blogs cannot access!')
      // console.log('status code ->' + err);
    })


    // Get User Data
    // this.userService.getUserData(user_id).subscribe(data => {
    //   this.status = data;

    //   console.log(user_id)
    // })

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
