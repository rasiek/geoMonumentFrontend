import { TestBed } from '@angular/core/testing';

import { CelebriteService } from './celebrite.service';

describe('CelebriteService', () => {
  let service: CelebriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelebriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
