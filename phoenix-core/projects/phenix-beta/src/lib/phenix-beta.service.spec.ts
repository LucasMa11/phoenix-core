import { TestBed } from '@angular/core/testing';

import { PhenixBetaService } from './phenix-beta.service';

describe('PhenixBetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhenixBetaService = TestBed.get(PhenixBetaService);
    expect(service).toBeTruthy();
  });
});
