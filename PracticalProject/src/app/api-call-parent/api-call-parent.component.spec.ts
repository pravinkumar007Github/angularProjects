import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallParentComponent } from './api-call-parent.component';

describe('ApiCallParentComponent', () => {
  let component: ApiCallParentComponent;
  let fixture: ComponentFixture<ApiCallParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCallParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCallParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
