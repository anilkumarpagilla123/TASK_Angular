import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterateComponent } from './fosterate.component';

describe('FosterateComponent', () => {
  let component: FosterateComponent;
  let fixture: ComponentFixture<FosterateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FosterateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FosterateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
