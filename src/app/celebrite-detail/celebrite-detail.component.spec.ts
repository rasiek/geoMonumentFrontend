import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebriteDetailComponent } from './celebrite-detail.component';

describe('CelebriteDetailComponent', () => {
  let component: CelebriteDetailComponent;
  let fixture: ComponentFixture<CelebriteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebriteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebriteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
