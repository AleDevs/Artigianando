import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: UsersComponent
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
