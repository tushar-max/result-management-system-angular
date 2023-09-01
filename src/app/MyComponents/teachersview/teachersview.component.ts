import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { ApiService } from 'src/app/Shared/api.service';
import { StudentData } from './teachersview.model';

@Component({
  selector: 'app-teachersview',
  templateUrl: './teachersview.component.html',
  styleUrls: ['./teachersview.component.css']
})
export class TeachersviewComponent implements OnInit {
  formValue!:FormGroup

  studentModelObj: StudentData = new StudentData;
  allStudentData: any;
  showAdd!:boolean;
  showBtn!:boolean;

  constructor(private formBuilder:FormBuilder, private api:ApiService){}
  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      rollNo:[''],
      name:[''],
      dob:[''],
      score:['']
    })
    this.getAllData();
  }

  clickAddStudent(){
    this.formValue.reset();
    this.showAdd=true;
    this.showBtn=false;
  }

  // Now Subscribing Our Data which is mapped by service
  addStudent(){
    this.studentModelObj.id=this.formValue.value.id;
    this.studentModelObj.rollNo=this.formValue.value.rollNo;
    this.studentModelObj.name=this.formValue.value.name;
    this.studentModelObj.dob=this.formValue.value.dob;
    this.studentModelObj.score=this.formValue.value.score;
    this.api.postStudent(this.studentModelObj).subscribe(res=>{
      console.log(res);
      alert("Student Record Added Successfully")
      let ref = document.getElementById('clear');
    ref?.click();
    this.formValue.reset();
    this.getAllData();
    },
    err=>{
      alert("Something went wrong")
    })
  }
  getAllData(){
    this.api.getStudent().subscribe(res=>{
      this.allStudentData =res;
    })
  }
  deleteData(data:any){
    this.api.deleteStudent(data.id).subscribe(res=>{
      alert("Record deleted successfully")
    })
    this.getAllData();
  }
  onEditData(data:any){
    this.showAdd=false;
    this.showBtn=true;
    this.studentModelObj.id=data.id;
    this.formValue.controls['rollNo'].setValue(data.rollNo);
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['dob'].setValue(data.dob);
    this.formValue.controls['score'].setValue(data.score);
  }
  updateStudent(){
    
    this.studentModelObj.rollNo=this.formValue.value.rollNo;
    this.studentModelObj.name=this.formValue.value.name;
    this.studentModelObj.dob=this.formValue.value.dob;
    this.studentModelObj.score=this.formValue.value.score;

    this.api.updateStudent(this.studentModelObj,this.studentModelObj.id).subscribe(res=>{
      console.log(res);
      alert("Details Updated Successfully!");
      let ref = document.getElementById('clear');
    ref?.click();
    this.formValue.reset();
    this.getAllData();
    }
    )
  }
}
