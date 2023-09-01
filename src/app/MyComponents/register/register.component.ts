import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private _http:HttpClient,private router:Router) {
    
  }
  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  //method to create user
  register(){
    this._http.post<any>("http://localhost:3000/register",this.registerForm.value).subscribe(res=>{
      alert("Registration Successful!");
      this.registerForm.reset();
      this.router.navigate(['login'])
    },
    err=>{
      alert("Something went wrong")
    }
    )
  }
}
