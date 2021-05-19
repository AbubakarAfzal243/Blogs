import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm : FormGroup;

  constructor(private http: UserServiceService, private fb:FormBuilder, private router: Router, private toastr: ToastrService) { 
    this.userForm = fb.group({
      name: new FormControl('',  Validators.required),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userForm.value);

    this.http.postUser(this.userForm.value).subscribe(data => {
      console.log(data);
      this.toastr.success('Successfully Sign up!')
      this.router.navigateByUrl('login');

    })

    

  }

}
