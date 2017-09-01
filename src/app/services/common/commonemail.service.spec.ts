import { TestBed, inject } from '@angular/core/testing';

import { CommonemailService } from './commonemail.service';

describe('CommonemailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonemailService]
    });
  });

  it('should be created', inject([CommonemailService], (service: CommonemailService) => {
    expect(service).toBeTruthy();
  }));
});
