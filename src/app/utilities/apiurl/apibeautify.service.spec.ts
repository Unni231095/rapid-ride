import { TestBed, inject } from '@angular/core/testing';

import { ApibeautifyService } from './apibeautify.service';

describe('ApibeautifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApibeautifyService]
    });
  });

  it('should be created', inject([ApibeautifyService], (service: ApibeautifyService) => {
    expect(service).toBeTruthy();
  }));
});
