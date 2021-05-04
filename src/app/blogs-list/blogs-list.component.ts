import { Component, OnInit } from '@angular/core';
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
    this.httpService.getData().subscribe(data => {
      this.status = data;

      console.log(this.status)
    })
  }

}
