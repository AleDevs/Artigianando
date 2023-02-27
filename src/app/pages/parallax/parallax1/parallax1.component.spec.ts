import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parallax1Component } from './parallax1.component';

describe('Parallax1Component', () => {
  let component: Parallax1Component;
  let fixture: ComponentFixture<Parallax1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parallax1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parallax1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
