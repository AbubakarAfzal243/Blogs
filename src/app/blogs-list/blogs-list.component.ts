import { Component, OnInit, ViewChild , AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Blog } from '../blog.model';
import { BlogsServiceService } from '../blogs-service.service';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {

  status: any = "";
  validUser :boolean ;
  searchbtn;
  // username;
  text: "";
  content;
  loading = true
  cat: string;

  @ViewChild(HeaderComponent) child ;
  

  constructor(private httpService: BlogsServiceService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    const cateName = this.route.snapshot.params.name;

    this.route.paramMap.subscribe(params => {
      // console.log('params', params.get('name'))
      this.searchbtn = params.get('name')
    })


    this.getBlog();

  }
  validToEdit(id){
    this.router.navigateByUrl('edit/'+ id);
  }

  getBlog(){
    this.httpService.getBlog().subscribe(data => {
      // this.httpService.blogs = data as Blog[];
      this.status = data;
      const { username } = JSON.parse(localStorage.getItem('some-key'))
      // console.log("user name from local",username)
      for (var val of this.status) {
        // console.log("All names",val.valid);
        if(username === val.uname){
          val.valid= false;
        }
        else{
          val.valid= true;
        }
        
      }

    },
    (err) => {
      this.toastr.error('Blogs cannot acces!')

    })
  }

  deleteBlog(id){
    // console.log("blog Delete", id);
    if(confirm('Are you sure to delete this blog?')== true){
      this.httpService.deleteBlog(id).subscribe(res => {
    
        this.toastr.success('Successfully Delete Blog!')
        this.getBlog()
        
      },(err) => {
        this.toastr.error('Blog is not delete!')
    
      })

      this.router.navigateByUrl('blogs');
    }
   
  }

}
