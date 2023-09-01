import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  studentResultObj:any;
  constructor(private _http: HttpClient) { }
  // set data

  setData(data:any){
    this.studentResultObj=data;
  }
  getData(){
    return this.studentResultObj;
  }

  // Creating Student Details using post method
  postStudent(data: any) {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res: any) => {
      return res;
    }))
  }
  // Getting Student Details using Get method
  getStudent(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res: any) => {
      return res;
    }))
  }
  //Update Student details using put method
  updateStudent(data:any,id:number){
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res: any) => {
      return res;
    }))
  }
  //Delete Student details using delete method
  deleteStudent(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res: any) => {
      return res;
    }))
  }

}
