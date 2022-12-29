import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { PorfolioService } from '../porfolios.service';
import { Portfolio } from '../portfolio';

@Component({
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent {

  displayedColumns: string[] = ['title'];
  dataSource: any[] = [];
  @ViewChild('portfolioTable') portfolioTable?: MatTable<Portfolio>;

  constructor(
    private _portfolioService: PorfolioService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._portfolioService.getAll().subscribe(res => {
      this.dataSource = res;
    })
  }

}
