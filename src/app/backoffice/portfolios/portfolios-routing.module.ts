import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

export const portfolioRoutes: Routes = [
  {
    path: '',
    component: PortfolioListComponent,
  },
  {
    path: ':portfolioId',
    component: PortfolioDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(portfolioRoutes)],
  exports: [RouterModule]
})
export class PortfoliosRoutingModule { }
