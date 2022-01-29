import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewCarComponent } from './dialog-new-car.component';

describe('DialogNewCarComponent', () => {
  let component: DialogNewCarComponent;
  let fixture: ComponentFixture<DialogNewCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
