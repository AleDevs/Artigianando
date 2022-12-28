import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public utente?: User;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {

  }

  async ngOnInit() {
    let id = this.authService.userData!.uid;

    this.userService.getById(id).then((user) => {
      this.utente = user;
    });

    await this.userService.getAllUser();

  }

}