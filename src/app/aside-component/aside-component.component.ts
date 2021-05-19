import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogsServiceService } from '../blogs-service.service';

@Component({
  selector: 'app-aside-component',
  templateUrl: './aside-component.component.html',
  styleUrls: ['./aside-component.component.css']
})
export class AsideComponentComponent implements OnInit {

  status: any = '';

  constructor(private httpService: BlogsServiceService) { }

  ngOnInit(): void {

    this.httpService.getBlog().subscribe(data => {
      this.httpService.blogs = data as Blog[];
      this.status = this.httpService.blogs;

    })
  }

}
