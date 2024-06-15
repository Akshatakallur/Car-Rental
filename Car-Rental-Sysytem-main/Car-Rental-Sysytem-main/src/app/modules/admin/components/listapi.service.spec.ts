import { TestBed } from '@angular/core/testing';

import { ListapiService } from './listapi.service';

describe('ListapiService', () => {
  let service: ListapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
