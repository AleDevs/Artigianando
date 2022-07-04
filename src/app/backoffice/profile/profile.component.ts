import { Component, OnInit } from '@angular/core';
import { UserManager } from 'src/app/shared/manager/users.manager';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private userManager: UserManager
  ) { 

  }

  ngOnInit(): void {
  }

}
