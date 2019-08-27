import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideotherComponent } from './insideother.component';

describe('InsideotherComponent', () => {
  let component: InsideotherComponent;
  let fixture: ComponentFixture<InsideotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
