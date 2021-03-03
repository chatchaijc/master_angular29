import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab15Component } from './lab15.component';

describe('Lab15Component', () => {
  let component: Lab15Component;
  let fixture: ComponentFixture<Lab15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
