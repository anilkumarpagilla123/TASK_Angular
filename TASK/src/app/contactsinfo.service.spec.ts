import { TestBed } from '@angular/core/testing';

import { ContactsinfoService } from './contactsinfo.service';

describe('ContactsinfoService', () => {
  let service: ContactsinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactsinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
