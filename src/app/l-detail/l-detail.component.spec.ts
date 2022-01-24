import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LDetailComponent } from './l-detail.component';

describe('LDetailComponent', () => {
  let component: LDetailComponent;
  let fixture: ComponentFixture<LDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
