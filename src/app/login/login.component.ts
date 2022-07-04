import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  data: any;
  token: any;
  showErrorMessage = false;

  constructor(private dataService: DataService, private toastr: ToastrService,
    private formBuilder: FormBuilder, private router: Router) { }

  loginForm() {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loginForm();
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    this.showErrorMessage = false;
    if (this.form.invalid) {
      return;
    }
    this.dataService.loginUser(this.form.value).subscribe(res => {
      this.data = res;
      if (this.data.status === 1) {
        this.token = this.data.data.token;
        localStorage.setItem('token', this.token);
        this.router.navigate(['/documentos']);
        this.toastr.success(JSON.stringify(this.data.message),
          JSON.stringify(this.data.code), {
          timeOut: 2000,
          progressBar: true,
        });
      } else if (this.data.status === 0) {
        this.toastr.success(JSON.stringify(this.data.message),
          JSON.stringify(this.data.code), {
          timeOut: 3000,
          progressBar: true,
        });
      }
    }, (err) => {
      this.showErrorMessage = true;
      this.toastr.error(JSON.stringify(err.error.message),
        JSON.stringify(err.error.code), {
        timeOut: 3000,
        progressBar: true,
      });
    });
  }

  isLoggedIn() : boolean {  
    return localStorage.getItem('token') !== null;
  }

}
