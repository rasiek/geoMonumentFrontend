import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDetailComponent } from './m-detail.component';

describe('MDetailComponent', () => {
  let component: MDetailComponent;
  let fixture: ComponentFixture<MDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
