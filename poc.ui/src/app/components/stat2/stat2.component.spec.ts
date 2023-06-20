import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stat2Component } from './stat2.component';

describe('Stat2Component', () => {
  let component: Stat2Component;
  let fixture: ComponentFixture<Stat2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stat2Component]
    });
    fixture = TestBed.createComponent(Stat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
