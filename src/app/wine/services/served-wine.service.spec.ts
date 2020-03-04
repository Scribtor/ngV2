import { TestBed } from '@angular/core/testing';

import { ServedWineService } from './served-wine.service';

describe('ServedWineService', () => {
  let service: ServedWineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServedWineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
