import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { RegistryFormComponent } from './profile/registry-form/registry-form.component';
import { UsersModule } from './users/users.module';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { BackofficeBaseComponent } from './backoffice-base/backoffice-base.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    RegistryFormComponent,
    BackofficeBaseComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersModule,
    BackofficeRoutingModule,
    MaterialModule
  ]
})
export class BackofficeModule { }
