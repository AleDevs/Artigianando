import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorCircleComponent } from './cursor-circle.component';

describe('CursorCircleComponent', () => {
  let component: CursorCircleComponent;
  let fixture: ComponentFixture<CursorCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursorCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
