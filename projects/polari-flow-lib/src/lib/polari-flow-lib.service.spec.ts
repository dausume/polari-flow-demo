import { TestBed } from '@angular/core/testing';

import { PolariFlowLibService } from './polari-flow-lib.service';

describe('PolariFlowLibService', () => {
  let service: PolariFlowLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolariFlowLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
