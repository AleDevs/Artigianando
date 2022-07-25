import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backoffice-base',
  templateUrl: './backoffice-base.component.html',
  styleUrls: ['./backoffice-base.component.scss']
})
export class BackofficeBaseComponent implements OnInit {
  
  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

}
