import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  userData: User[] = [];
  displayedColumns: string[] = ['email', 'firstName', 'lastName'];

  constructor(
    private userService: UserService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.userData = await this.userService.getAllUser();
  }

}