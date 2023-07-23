import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveproductComponent } from './inactiveproduct.component';

describe('InactiveproductComponent', () => {
  let component: InactiveproductComponent;
  let fixture: ComponentFixture<InactiveproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
