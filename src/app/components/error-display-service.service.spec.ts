import { TestBed } from '@angular/core/testing';

import { ErrorDisplayServiceService } from './error-display-service.service';

describe('ErrorDisplayServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorDisplayServiceService = TestBed.get(ErrorDisplayServiceService);
    expect(service).toBeTruthy();
  });
});
