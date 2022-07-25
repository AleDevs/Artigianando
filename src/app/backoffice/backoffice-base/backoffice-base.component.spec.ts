import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeBaseComponent } from './backoffice-base.component';

describe('BackofficeBaseComponent', () => {
  let component: BackofficeBaseComponent;
  let fixture: ComponentFixture<BackofficeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackofficeBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
