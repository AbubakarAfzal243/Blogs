import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  users: any;
  constructor(private http: UserServiceService, private fb:FormBuilder, private router: Router, private toastr: ToastrService) { 
    this.loginForm = fb.group({
      email: new FormControl('',  Validators.required),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("login values", this.loginForm.value);

    this.http.loginUser(this.loginForm.value).subscribe(res  => {
      console.log(res)
      localStorage.setItem('some-key', JSON.stringify(res));

      if(localStorage.getItem('some-key')!== null){
        this.http.setLoggedIn(true)
      }
      // this.http.setLoggedIn(true)
      
     
      this.toastr.success('Successfully Login!')
        this.router.navigateByUrl('blogs');
      })
    
  }

  

}
