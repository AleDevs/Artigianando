import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChildren('page') pages!: QueryList<ElementRef>;
  @ViewChild('prev') prev!: ElementRef;
  @ViewChild('next') next!: ElementRef;

  idlePeriod = 100;
  animationDuration = 1000;
  lastAnimation = 0;
  index = 0;

  togglePageContent(index: any, state: any) {
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

  ngAfterViewInit() {
    this.togglePageContent(0, 'show');
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
    if (this.index > 3) return;
    this.togglePageContent(this.index, 'hide');
    this.index++;
    this.pages.forEach((page, i) => {
      if (i === this.index) {
        this.togglePageContent(i, 'show');
        page.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
