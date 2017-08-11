import { TestBed, inject } from '@angular/core/testing';

import { RegitrationService } from './regitration.service';

describe('RegitrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegitrationService]
    });
  });

  it('should be created', inject([RegitrationService], (service: RegitrationService) => {
    expect(service).toBeTruthy();
  }));
});
