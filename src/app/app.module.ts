import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './MyComponents/home/home.component';
import { TeachersviewComponent } from './MyComponents/teachersview/teachersview.component';
import { StudentviewComponent } from './MyComponents/studentview/studentview.component';
import { StudentformComponent } from './MyComponents/studentform/studentform.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { LoggedinNavbarComponent } from './MyComponents/loggedin-navbar/loggedin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TeachersviewComponent,
    StudentviewComponent,
    StudentformComponent,
    NavbarComponent,
    LoggedinNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
