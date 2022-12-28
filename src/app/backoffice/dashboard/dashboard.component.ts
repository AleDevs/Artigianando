import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public utente?: User;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    let id = this.authService.userData!.uid;

    this.userService.getById(id).then((user) => {
      this.utente = user;
    });

  }

}
