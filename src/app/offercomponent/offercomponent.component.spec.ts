import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffercomponentComponent } from './offercomponent.component';

describe('OffercomponentComponent', () => {
  let component: OffercomponentComponent;
  let fixture: ComponentFixture<OffercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffercomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
