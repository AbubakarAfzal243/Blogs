import { validateHorizontalPosition } from '@angular/cdk/overlay';
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

  loginForm: FormGroup;
  guser;

  users: any;
  constructor(private http: UserServiceService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.loginForm = fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.toastr.error('Invlid Login!')
    }
    else {
      console.log("login values", this.loginForm.value);

      this.http.loginUser(this.loginForm.value).subscribe(res => {
        console.log(res)
        localStorage.setItem('some-key', JSON.stringify(res));
        // localStorage.setItem('user-name', JSON.stringify(res));

        if (localStorage.getItem('some-key') !== null) {
          this.http.setLoggedIn(true)
        }
        // this.http.setLoggedIn(true)


        this.toastr.success('Successfully Login!')
        this.router.navigateByUrl('blogs');
      },

        (err) => {
          this.toastr.error('unSuccessfully Login!')
          console.log('status code ->' + err);
        })

    }
  }



}
