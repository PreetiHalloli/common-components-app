import { TestBed } from '@angular/core/testing';

import { InnoCommonLibService } from './inno-common-lib.service';

describe('InnoCommonLibService', () => {
  let service: InnoCommonLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InnoCommonLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
