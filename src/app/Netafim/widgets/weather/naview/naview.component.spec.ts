import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAViewComponent } from './naview.component';

describe('NAViewComponent', () => {
  let component: NAViewComponent;
  let fixture: ComponentFixture<NAViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
