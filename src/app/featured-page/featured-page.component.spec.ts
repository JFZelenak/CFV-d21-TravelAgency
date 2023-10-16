import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPageComponent } from './featured-page.component';

describe('FeaturedPageComponent', () => {
  let component: FeaturedPageComponent;
  let fixture: ComponentFixture<FeaturedPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedPageComponent]
    });
    fixture = TestBed.createComponent(FeaturedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
