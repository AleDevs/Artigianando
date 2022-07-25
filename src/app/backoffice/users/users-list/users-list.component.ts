import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  rowSelected: string = '';

  userData: User[] = [];
  displayedColumns: string[] = ['uid', 'email', 'firstName', 'lastName'];

  constructor(
    private userService: UserService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.userData = await this.userService.getAllUser();
  }

  onSelectRow(id: string) {
    this.rowSelected = id;
  }

}