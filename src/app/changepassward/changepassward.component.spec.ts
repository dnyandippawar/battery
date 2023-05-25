import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswardComponent } from './changepassward.component';

describe('ChangepasswardComponent', () => {
  let component: ChangepasswardComponent;
  let fixture: ComponentFixture<ChangepasswardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangepasswardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
