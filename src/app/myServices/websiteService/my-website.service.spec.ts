import { TestBed } from '@angular/core/testing';

import { MyWebsiteService } from './my-website.service';

describe('MyWebsiteService', () => {
  let service: MyWebsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyWebsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
