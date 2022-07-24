import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './users/user-routing.module';

export const backofficeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'profilo',
    pathMatch: 'full'
  },
  {
    path: 'profilo',
    component: ProfileComponent
  },
  {
    path: 'utenti',
    children: userRoutes
  },
];

@NgModule({
  imports: [RouterModule.forChild(backofficeRoutes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
