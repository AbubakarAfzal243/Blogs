import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogsServiceService } from '../blogs-service.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {

  status : any = '';
  

  constructor(private httpService: BlogsServiceService) { }

  ngOnInit(): void {
    // this.httpService.getData().subscribe(data => {
    //   this.status = data;

    //   console.log(this.status)
    // })

    this.httpService.getBlog().subscribe(data => {
      this.httpService.blogs = data as Blog[];
      this.status = this.httpService.blogs;

      console.log(this.status)
    })
  }

}
