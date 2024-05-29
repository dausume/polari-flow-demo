import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolariFlowLibComponent } from './polari-flow-lib.component';

describe('PolariFlowLibComponent', () => {
  let component: PolariFlowLibComponent;
  let fixture: ComponentFixture<PolariFlowLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolariFlowLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolariFlowLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
