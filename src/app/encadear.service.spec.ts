import { TestBed } from '@angular/core/testing';

import { EncadearService } from './encadear.service';

describe('EncadearService', () => {
  let service: EncadearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncadearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
