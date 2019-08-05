import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopCardImgComponent } from './laptop-card-img.component';

describe('LaptopCardImgComponent', () => {
  let component: LaptopCardImgComponent;
  let fixture: ComponentFixture<LaptopCardImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopCardImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopCardImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
