import { TestBed, inject } from '@angular/core/testing';

import { VehicleregistrationService } from './vehicleregistration.service';

describe('VehicleregistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleregistrationService]
    });
  });

  it('should be created', inject([VehicleregistrationService], (service: VehicleregistrationService) => {
    expect(service).toBeTruthy();
  }));
});
