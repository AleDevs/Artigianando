import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {

  private _userSelected: string = '';
  public get userSelected(): string {
    return this._userSelected;
  }

  @Input()
  public set userSelected(value: string) {
    this._userSelected = value;
    this.onModelReady();
  }
  user?: User;

  formGroup = this._formBuilder.group({
    uid: [{ value: '', disabled: true }, Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required]
  });

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
  ) {

  }

  ngOnInit() {

  }

  async onModelReady() {
    this.user = await this.userService.getById(this._userSelected);
    this.formGroup.patchValue(this.user);
  }

  onSubmit() {
    let user: User = new User();
    user.firstName = this.formGroup.controls.firstName.value;
    user.lastName = this.formGroup.controls.lastName.value;
    user.email = this.formGroup.controls.email.value;
    this.userService.updateMyUser(user)
  }

}
