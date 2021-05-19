import { Component, OnInit, ViewChild , AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  searchbttn;
  text: "";
  content;
  loading = true
  cat: string;

  @ViewChild(HeaderComponent) child ;
  

  constructor(private httpService: BlogsServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const cateName = this.route.snapshot.params.name;
    // var params={id:_id}

     console.log("Categury Name by Param : ",cateName)

    // this.httpService.getData().subscribe(data => {
    //   this.status = data;

    //   console.log(this.status)
    // })
    this.route.paramMap.subscribe(params => {
      console.log('params', params.get('name'))
      this.searchbtn = params.get('name')
    })
    // if(cateName) {
    //   this.searchbtn = cateName;
    //   console.log("Categury Name by Param : ",this.searchbtn)
    // }
    this.httpService.getBlog().subscribe(data => {
      this.httpService.blogs = data as Blog[];
      this.status = this.httpService.blogs;

      console.log(this.status)
    })
  }
 
}
