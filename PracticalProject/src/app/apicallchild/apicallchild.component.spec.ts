import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicallchildComponent } from './apicallchild.component';

describe('ApicallchildComponent', () => {
  let component: ApicallchildComponent;
  let fixture: ComponentFixture<ApicallchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApicallchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicallchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
