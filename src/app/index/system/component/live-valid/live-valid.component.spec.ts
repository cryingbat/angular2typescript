/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LiveValidComponent } from './live-valid.component';

describe('LiveValidComponent', () => {
  let component: LiveValidComponent;
  let fixture: ComponentFixture<LiveValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
