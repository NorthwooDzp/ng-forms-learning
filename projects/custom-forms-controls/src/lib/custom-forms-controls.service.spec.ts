import { TestBed } from '@angular/core/testing';

import { CustomFormsControlsService } from './custom-forms-controls.service';

describe('CustomFormsControlsService', () => {
  let service: CustomFormsControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomFormsControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
