import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './backoffice/access/login/login.component';
import { RegisterComponent } from './backoffice/access/register/register.component';
import { BackofficeBaseComponent } from './backoffice/backoffice-base/backoffice-base.component';
import { HomeComponent } from './pages/home/home.component';
import { Parallax1Component } from './pages/parallax/parallax1/parallax1.component';
import { AuthGuard } from "./shared/guard/auth.guard";


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'parallax1', component: Parallax1Component },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'backoffice',
    component: BackofficeBaseComponent,
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
