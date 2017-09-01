import { TestBed, inject } from '@angular/core/testing';

import { CreatepoolService } from './createpool.service';

describe('CreatepoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatepoolService]
    });
  });

  it('should be created', inject([CreatepoolService], (service: CreatepoolService) => {
    expect(service).toBeTruthy();
  }));
});
