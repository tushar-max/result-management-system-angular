import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { StudentformComponent } from './MyComponents/studentform/studentform.component';
import { StudentviewComponent } from './MyComponents/studentview/studentview.component';
import { TeachersviewComponent } from './MyComponents/teachersview/teachersview.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'teacher', component: TeachersviewComponent
  },
  {
    path: 'studentform', component:StudentformComponent
  },
  {
    path: 'result', component:StudentviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
