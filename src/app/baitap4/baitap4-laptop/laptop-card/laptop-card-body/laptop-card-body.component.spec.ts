import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopCardBodyComponent } from './laptop-card-body.component';

describe('LaptopCardBodyComponent', () => {
  let component: LaptopCardBodyComponent;
  let fixture: ComponentFixture<LaptopCardBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopCardBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
