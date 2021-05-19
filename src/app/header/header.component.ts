import { Component, OnInit , Output,EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchcriteria = new EventEmitter<String>();

  searchword;
  localValue : boolean;

  localValues : boolean;
  
  searchtt : any ="HEllonasdc a";

  constructor(private userService:UserServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem("some-key") !== null){
      this.localValue= true;
      this.localValues= false;
    }
     else {
      this.localValue= false;
      this.localValues= true;
     }
    // this.localValue;
  }

  logout(){
    console.log("lougdsvout");
    localStorage.removeItem('some-key');
    localStorage.clear();

    this.toastr.success('Successfully Logout!')
  }


}
