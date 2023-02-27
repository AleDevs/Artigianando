import { Component } from '@angular/core';

@Component({
  selector: 'app-users-layout',
  templateUrl: './users-layout.component.html',
  styleUrls: ['./users-layout.component.scss']
})
export class UsersLayoutComponent {

  userSelected: string = '';

  setUserSelected(event: string){
    this.userSelected = event;
  }
}
