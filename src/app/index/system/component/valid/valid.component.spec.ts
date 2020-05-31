/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValidComponent } from './valid.component';

describe('ValidComponent', () => {
  let component: ValidComponent;
  let fixture: ComponentFixture<ValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
