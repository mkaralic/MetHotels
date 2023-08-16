import { TestBed } from '@angular/core/testing';

import { MetHotelsApiService } from './met-hotels-api.service';

describe('MetHotelsApiService', () => {
  let service: MetHotelsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetHotelsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
