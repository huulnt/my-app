import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from "./app.router";
import { RegisterComponent } from './register/register.component';
import { CanActiveLogin } from './auth/canActiveLogin.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CanActiveLogin
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
