import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationcomponentComponent } from './recommendationcomponent.component';

describe('RecommendationcomponentComponent', () => {
  let component: RecommendationcomponentComponent;
  let fixture: ComponentFixture<RecommendationcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
