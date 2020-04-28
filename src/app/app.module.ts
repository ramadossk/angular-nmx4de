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
import { Login5Component } from './login5/login5.component';
import { Login6Component } from './login6/login6.component';


const routes: Routes = [
  { path: '',   redirectTo: 'login5', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  { path: 'login3', component: Login3Component },
  { path: 'login4', component: Login4Component },
  { path: 'login5', component: Login5Component },
  { path: 'login6', component: Login6Component }
]
@NgModule({
  imports:      [ BrowserModule, ParticlesModule, FormsModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, Login2Component, Login3Component, Login4Component, Login5Component, Login6Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
