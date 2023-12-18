import { TestBed } from '@angular/core/testing';

import { HomeRecipeService } from './home-recipe.service';

describe('HomeRecipeService', () => {
  let service: HomeRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
