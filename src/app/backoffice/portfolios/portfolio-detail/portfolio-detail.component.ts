import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PorfolioService } from '../porfolios.service';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent {

  form!: FormGroup;

  constructor(
    private portfolioService: PorfolioService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      isActive: new FormControl('')
    })
  }

  back(): void {
    this.router.navigate(["/backoffice/portfolio"]);
  }

  onSubmit() {
    if (!this.form?.valid) {
      return;
    }
    this.portfolioService.add(this.form.value);
  }
}
