import { TestBed } from '@angular/core/testing';

import { WishSevice } from './wish';

describe('Wish', () => {
  let service: WishSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
