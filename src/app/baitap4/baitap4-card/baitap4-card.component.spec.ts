import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4CardComponent } from './baitap4-card.component';

describe('Baitap4CardComponent', () => {
  let component: Baitap4CardComponent;
  let fixture: ComponentFixture<Baitap4CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
