import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from '../../Shared/api.service';
@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit{
  queryForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private _http:HttpClient, private router:Router,private shared:ApiService) {
    
  }
  ngOnInit(): void {
    this.queryForm=this.formBuilder.group({
      rollNo:[''],
      name:['']
    })
  }
  queryData(){
    this._http.get<any>("http://localhost:3000/posts").subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.rollNo==this.queryForm.value.rollNo &&a.name ===this.queryForm.value.name
      })
      if (user) {
        alert("Fetched data successfully!")
        console.log(user);
        this.shared.setData(user);
        this.router.navigate(['result'])
      }
      else{
        alert("Invalid Credentials!!!")
        this.shared.setData(null);
      }
    },
    err=>{
      alert("Something went wrong.")
    }
    )
  }
}
