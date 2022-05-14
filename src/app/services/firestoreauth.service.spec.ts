import { TestBed } from '@angular/core/testing';

import { FirestoreauthService } from './firestoreauth.service';

describe('FirestoreauthService', () => {
  let service: FirestoreauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
