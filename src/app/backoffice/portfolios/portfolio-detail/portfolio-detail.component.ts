import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PorfolioService } from '../porfolios.service';
import { Portfolio } from '../portfolio';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent {

  form!: FormGroup;
  routeSub?: Subscription;
  isNew: boolean = true;
  currentPortfolio?: Portfolio;

  constructor(
    private portfolioService: PorfolioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      isActive: new FormControl('')
    })

    this.routeSub = this.route.params.subscribe(params => {
      if (params?.portfolioId == undefined && params?.portfolioId != null) return;

      if (params?.portfolioId == 0) {
        this.isNew = true;
      } else {
        this.isNew = false;
        console.log(this.portfolioService.getPortfolioById(params?.portfolioId));
        
        // this.currentPortfolio = 
      }
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  back(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    if (!this.form?.valid) {
      return;
    }
    this.portfolioService.add(this.form.value);
  }

  getPortfolioById(portfolioId: string) {

  }
}
