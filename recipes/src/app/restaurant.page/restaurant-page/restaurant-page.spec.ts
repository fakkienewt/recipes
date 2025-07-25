import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPage } from './restaurant-page';

describe('RestaurantPage', () => {
  let component: RestaurantPage;
  let fixture: ComponentFixture<RestaurantPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
