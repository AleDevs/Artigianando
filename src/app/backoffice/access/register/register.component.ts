import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/model/user';
import { AuthService } from "../../../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  register(form: FormGroup) {
    this.authService
      .register(form.controls.email.value, form.controls.password.value)
      .then((res) => {
        console.log(res);
        
        this.router.navigate(['backoffice']);
      })
      .catch((e: any) => console.log(e.message));
  }

}
