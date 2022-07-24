import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  //  {
  //   path: ':userId',
  //   canActivate: [AuthService],
  //   component: UserDetailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
