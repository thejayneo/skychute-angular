import { TestBed } from '@angular/core/testing';

import { AltHelperService } from './alt-helper.service';

describe('AltHelperService', () => {
  let service: AltHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
