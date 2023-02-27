import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersComponent } from './users.component';
import { UsersLayoutComponent } from './users-layout/users-layout.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersDetailComponent,
    UsersComponent,
    UsersLayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class UsersModule { }
