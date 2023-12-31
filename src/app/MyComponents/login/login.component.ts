import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  logIn() {
    this._http.get<any>("http://localhost:3000/register").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        this.loginForm.reset();
        this.router.navigate(['teacher'])
        alert("Login Successful!");
      }
      else {
        alert("Wrong email or password!\n Please Try again.")
      }
    },
      err => {
        alert("Something went wrong.")
      }
    )
  }
}
