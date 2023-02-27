import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PorfolioService } from 'src/app/backoffice/portfolios/porfolios.service';
import { Portfolio } from 'src/app/backoffice/portfolios/portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChildren('page') pages!: QueryList<ElementRef>;
  @ViewChild('prev') prev!: ElementRef;
  @ViewChild('next') next!: ElementRef;

  index = 0;

  portfoliosList: Portfolio[] = [];

  constructor(
    private portfolioService: PorfolioService,
  ) {

  }

  togglePageContent(index: number, state: string) {
    if (state === 'show') {
      this.pages
        .toArray()
      [index].nativeElement.querySelector('.page-content')
        .classList.add('show');
    } else {
      this.pages
        .toArray()
      [index].nativeElement.querySelector('.page-content')
        .classList.remove('show');
    }
  }

  async ngOnInit() {
    await this.getAll();
  }

  async ngAfterViewInit() {
    if(this.portfoliosList.length > 0){
      this.togglePageContent(0, 'show');
    }
  }

  clickPrev() {
    if (this.index < 1) return;
    this.togglePageContent(this.index, 'hide');
    this.index--;
    this.pages.forEach((page, i) => {
      if (i === this.index) {
        this.togglePageContent(i, 'show');
        page.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  clickNext() {
    if (this.index >= (this.portfoliosList.length - 1)) return;
    this.togglePageContent(this.index, 'hide');
    this.index++;
    this.pages.forEach((page, i) => {
      if (i === this.index) {
        this.togglePageContent(i, 'show');
        page.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  getAll() {
    this.portfolioService.getAll().subscribe((res: any[]) => {
      this.portfoliosList = res;
    })
  }
}
