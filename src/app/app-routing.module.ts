import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './backoffice/access/login/login.component';
import { RegisterComponent } from './backoffice/access/register/register.component';
import {ProfileComponent} from './backoffice/profile/profile.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuard} from "./shared/guard/auth.guard";


const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'backoffice',
    component: ProfileComponent,
    canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
