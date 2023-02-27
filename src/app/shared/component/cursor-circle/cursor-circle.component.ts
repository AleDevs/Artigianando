import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor-circle',
  templateUrl: './cursor-circle.component.html',
  styleUrls: ['./cursor-circle.component.scss']
})
export class CursorCircleComponent {

  top:any;
  left:any;
  expand=false;

  constructor() { }

  @HostListener('document:click', ['$event'])
  onClick($event: any) {
     this.expand=true;
     setTimeout(() => {
      this.expand=false;
     }, 500)
 }

@HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.top=($event.pageY - 20)+ "px";
    this.left= ($event.pageX - 20)+ "px";
 }

}
