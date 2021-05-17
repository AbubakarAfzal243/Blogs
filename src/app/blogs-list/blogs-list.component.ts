import { Component, OnInit, ViewChild , AfterViewInit} from '@angular/core';
import { Blog } from '../blog.model';
import { BlogsServiceService } from '../blogs-service.service';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {

  status : any = '';
  searchbtn;
  text: "";
  content;
  loading = true

  @ViewChild(HeaderComponent) child ;
  

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
