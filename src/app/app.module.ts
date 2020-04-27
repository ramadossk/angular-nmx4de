import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { Login4Component } from './login4/login4.component';


const routes: Routes = [
  { path: '',   redirectTo: 'login4', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  { path: 'login3', component: Login3Component },
  { path: 'login4', component: Login4Component }
]
@NgModule({
  imports:      [ BrowserModule, ParticlesModule, FormsModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, Login2Component, Login3Component, Login4Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
