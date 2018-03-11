import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanActiveLogin } from './auth/canActiveLogin.service';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '', component: AppComponent, canActivate: [CanActiveLogin]}
];
