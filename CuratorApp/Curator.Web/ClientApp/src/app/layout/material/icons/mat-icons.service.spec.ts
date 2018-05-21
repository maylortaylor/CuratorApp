import { TestBed, inject } from '@angular/core/testing';

import { MatIconsService } from './mat-icons.service';

describe('MatIconsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatIconsService]
    });
  });

  it('should be created', inject([MatIconsService], (service: MatIconsService) => {
    expect(service).toBeTruthy();
  }));
});
