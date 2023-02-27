import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLayoutComponent } from './users-layout/users-layout.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: UsersLayoutComponent
  },
  //  {
  //   path: ':userId',
  //   component: UserDetailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
