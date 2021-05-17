import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private http: UserServiceService, private fb:FormBuilder, private router: Router) { 
    this.loginForm = fb.group({
      email: new FormControl('',  Validators.required),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("login values", this.loginForm.value);

    this.http.loginUser(this.loginForm.value).subscribe(data => {
        console.log(data);
        // this.router.navigateByUrl('blogs');
      })
    
  }

  

}
