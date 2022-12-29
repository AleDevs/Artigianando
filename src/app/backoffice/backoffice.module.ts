import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { RegistryFormComponent } from './profile/registry-form/registry-form.component';
import { UsersModule } from './users/users.module';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeBaseComponent } from './backoffice-base/backoffice-base.component';
import { ThemesComponent } from './themes/themes.component';
import { TodosModule } from './todos/todos.module';
import { PortfoliosModule } from './portfolios/portfolios.module';

@NgModule({
    declarations: [
        DashboardComponent,
        ProfileComponent,
        RegistryFormComponent,
        BackofficeBaseComponent,
        ThemesComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        UsersModule,
        TodosModule,
        PortfoliosModule,
        BackofficeRoutingModule,
    ],
})
export class BackofficeModule { }
