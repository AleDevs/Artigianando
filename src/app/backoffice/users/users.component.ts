import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userSelected: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  setUserSelected(event: string){
    this.userSelected = event;
  }

}
