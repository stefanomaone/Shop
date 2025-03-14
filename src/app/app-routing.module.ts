import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {path:'',component: WelcomeComponent},
  {path:'login',component: LoginFormComponent},
  {path:'registration',component: RegistrationComponent},
  {path:'**',component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],  // Usa HashLocationStrategy
  exports: [RouterModule]})
export class AppRoutingModule { }
