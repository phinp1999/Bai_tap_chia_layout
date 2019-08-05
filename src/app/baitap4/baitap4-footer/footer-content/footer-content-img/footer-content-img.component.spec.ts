import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContentImgComponent } from './footer-content-img.component';

describe('FooterContentImgComponent', () => {
  let component: FooterContentImgComponent;
  let fixture: ComponentFixture<FooterContentImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterContentImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterContentImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
