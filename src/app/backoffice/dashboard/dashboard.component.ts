import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/users.service';
import { TodosService } from '../todos/todos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public utente?: User;
  todos: number = 0

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _todoService: TodosService,
  ) {

  }

  async ngOnInit(): Promise<void> {
    let id = this._authService.userData!.uid;

    this._userService.getById(id).then((user) => {
      this.utente = user;
    });

    this.todos = await this._todoService.getTodoCount();
  }

}
