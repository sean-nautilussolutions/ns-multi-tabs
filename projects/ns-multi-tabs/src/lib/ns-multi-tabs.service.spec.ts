import { TestBed } from '@angular/core/testing';

import { NsMultiTabsService } from './ns-multi-tabs.service';

describe('NsMultiTabsService', () => {
  let service: NsMultiTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NsMultiTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
