import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveproductComponent } from './activeproduct.component';

describe('ActiveproductComponent', () => {
  let component: ActiveproductComponent;
  let fixture: ComponentFixture<ActiveproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
