import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneCardBodyComponent } from './smartphone-card-body.component';

describe('SmartphoneCardBodyComponent', () => {
  let component: SmartphoneCardBodyComponent;
  let fixture: ComponentFixture<SmartphoneCardBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneCardBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
