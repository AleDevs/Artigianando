import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PorfolioService } from '../porfolios.service';
import { Portfolio } from '../portfolio';

@Component({
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent {

  displayedColumns: string[] = ['title'];
  dataSource: Portfolio[] = [];
  @ViewChild('portfolioTable') portfolioTable?: MatTable<Portfolio>;

  constructor(
    private portfolioService: PorfolioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.portfolioService.getAll().subscribe((res: any[]) => {
      this.dataSource = res;
    })
  }

  new(){
    this.router.navigate([`${this.router.url}`, 0]);
  }
  
  edit(portfolio: Portfolio){
    this.router.navigate([`${this.router.url}`, portfolio ? portfolio.id : 0]);
  }

}
