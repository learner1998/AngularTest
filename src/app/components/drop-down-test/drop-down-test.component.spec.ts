import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownTestComponent } from './drop-down-test.component';

describe('DropDownTestComponent', () => {
  let component: DropDownTestComponent;
  let fixture: ComponentFixture<DropDownTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
