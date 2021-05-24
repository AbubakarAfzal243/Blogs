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

  re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  userForm: FormGroup;
  serverErrorMessages : string;

  constructor(private http: UserServiceService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.userForm = fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  get email(){
    return this.userForm.get('email') 
  }
  get password(){
    return this.userForm.get('password') 
  }
  get name(){
    return this.userForm.get('name') 
  }

  ngOnInit(): void {
  }

  onSubmit() {

    if (!this.userForm.valid) {
      this.toastr.error('Invalid Sign up!')
    }
    else if (this.userForm.valid) {

      this.http.postUser(this.userForm.value).subscribe(data => {
        // console.log(data);

        this.toastr.success('Successfully Sign up!')
        this.router.navigateByUrl('login');
      },

        (err) => {
          if(err.status === 422){
            this.serverErrorMessages = err.error.join('<br/>')
            this.toastr.error(this.serverErrorMessages)
          }
          else{
          this.toastr.error('unSuccessfully Sign up!')
          // console.log('status code ->' + err);
          }
          // err =>{

          //   console.log('status code ->' + err);

          // this.toastr.error('unSuccessfully Sign up!')

        });
    }

    else{
       this.toastr.error('unSuccessfully Sign up!')
    }
    
  }

}
