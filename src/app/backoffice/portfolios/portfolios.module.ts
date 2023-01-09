import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfoliosRoutingModule } from './portfolios-routing.module';

import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';


@NgModule({
  declarations: [
    PortfolioListComponent,
    PortfolioDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PortfoliosModule { }
