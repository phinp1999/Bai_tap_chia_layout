import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4FooterComponent } from './baitap4-footer.component';

describe('Baitap4FooterComponent', () => {
  let component: Baitap4FooterComponent;
  let fixture: ComponentFixture<Baitap4FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
