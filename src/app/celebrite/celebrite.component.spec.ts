import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebriteComponent } from './celebrite.component';

describe('CelebriteComponent', () => {
  let component: CelebriteComponent;
  let fixture: ComponentFixture<CelebriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
