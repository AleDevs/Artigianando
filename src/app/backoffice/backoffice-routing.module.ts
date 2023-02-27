import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { portfolioRoutes } from './portfolios/portfolios-routing.module';
import { ProfileLayoutComponent } from './profile/profile-layout/profile-layout.component';
import { ThemesComponent } from './themes/themes.component';
import { TodosLayoutComponent } from './todos/todos-layout/todos-layout.component';
import { userRoutes } from './users/users-routing.module';

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
    component: ProfileLayoutComponent
  },
  {
    path: 'temi',
    component: ThemesComponent
  },
  {
    path: 'todos',
    component: TodosLayoutComponent
  },
  {
    path: 'portfolio',
    children: portfolioRoutes
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
