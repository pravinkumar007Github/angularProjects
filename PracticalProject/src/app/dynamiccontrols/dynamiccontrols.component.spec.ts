import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccontrolsComponent } from './dynamiccontrols.component';

describe('DynamiccontrolsComponent', () => {
  let component: DynamiccontrolsComponent;
  let fixture: ComponentFixture<DynamiccontrolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiccontrolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
