import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { RegistryFormComponent } from './registry-form/registry-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileLayoutComponent,
    RegistryFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProfileModule { }
