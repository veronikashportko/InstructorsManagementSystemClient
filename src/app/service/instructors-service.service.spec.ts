import { TestBed } from '@angular/core/testing';

import { InstructorsServiceService } from './instructors-service.service';

describe('InstructorsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstructorsServiceService = TestBed.get(InstructorsServiceService);
    expect(service).toBeTruthy();
  });
});
