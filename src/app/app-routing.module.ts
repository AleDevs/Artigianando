import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './backoffice/access/login/login.component';
import { RegisterComponent } from './backoffice/access/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from "./shared/guard/auth.guard";


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'backoffice',
    loadChildren: () => import('./backoffice/backoffice.module').then(mod => mod.BackofficeModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
