import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-registry-form',
  templateUrl: './registry-form.component.html',
  styleUrls: ['./registry-form.component.scss']
})
export class RegistryFormComponent implements OnInit {

  formGroup = this._formBuilder.group({
    uid: [{value: '', disabled: true}, Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required]
  });

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
  ) {

  }

  ngOnInit(): void {
    this.onModelReady();
  }

  async onModelReady() {
    let myUser: User = await this.userService.getMyUser();
    this.formGroup.patchValue(myUser)
  }

  onSubmit() {
    let user: User = new User();
    user.firstName = this.formGroup.controls.firstName.value;
    user.lastName = this.formGroup.controls.lastName.value;
    user.email = this.formGroup.controls.email.value;
    this.userService.updateMyUser(user)
  }

}
