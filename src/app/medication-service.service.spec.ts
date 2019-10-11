import { TestBed } from '@angular/core/testing';

import { MedicationServiceService } from './medication-service.service';

describe('MedicationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicationServiceService = TestBed.get(MedicationServiceService);
    expect(service).toBeTruthy();
  });
});
