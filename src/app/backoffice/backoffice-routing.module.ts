import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ThemesComponent } from './themes/themes.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { userRoutes } from './users/user-routing.module';

export const backofficeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profilo',
    component: ProfileComponent
  },
  {
    path: 'temi',
    component: ThemesComponent
  },
  {
    path: 'temi',
    component: ThemesComponent
  },
  {
    path: 'todos',
    component: TodoListComponent
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
