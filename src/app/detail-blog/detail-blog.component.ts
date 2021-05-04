import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    let id = this.route.snapshot.params.id;

    this.status = id;

    this.httpService.getData().subscribe(data => {
      this.status = data;

      console.log(this.status)
    })
    
  }


  // constructor(private httpService: BlogsServiceService) { }

  // ngOnInit(): void {
  //   this.httpService.getData().subscribe(data => {
  //     this.status = data;

  //     console.log(this.status)
  //   })
  // }

}
