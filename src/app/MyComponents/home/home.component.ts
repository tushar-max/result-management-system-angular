import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route:Router) {
    
  }
  teacherBtn(){
    this.route.navigate(['login']);
  }
  studentBtn(){
    this.route.navigate(['studentform']);
  }
}
