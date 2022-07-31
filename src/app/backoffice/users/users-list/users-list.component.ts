import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  displayedColumns: string[] = ['email', 'firstName', 'lastName'];

  @Output() userSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private userService: UserService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.userData = await this.userService.getAllUser();
  }

  onSelectRow(id: string) {
    this.userSelected.emit(id);
  }

}