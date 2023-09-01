import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {ApiService} from '../../Shared/api.service';
@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {
  resultData:any;
  constructor(private shared:ApiService,private formBuilder:FormBuilder) {
    
  }
  ngOnInit(): void {
    this.resultData=this.shared.getData();
    console.log(this.resultData);
  }
  printResult(){
    return this.resultData;
  }
}
