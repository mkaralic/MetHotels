import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomscomponentComponent } from './roomscomponent.component';

describe('RoomscomponentComponent', () => {
  let component: RoomscomponentComponent;
  let fixture: ComponentFixture<RoomscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
