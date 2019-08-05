import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneCardImgComponent } from './smartphone-card-img.component';

describe('SmartphoneCardImgComponent', () => {
  let component: SmartphoneCardImgComponent;
  let fixture: ComponentFixture<SmartphoneCardImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneCardImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneCardImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
