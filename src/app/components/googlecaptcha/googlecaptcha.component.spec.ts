import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglecaptchaComponent } from './googlecaptcha.component';

describe('GooglecaptchaComponent', () => {
  let component: GooglecaptchaComponent;
  let fixture: ComponentFixture<GooglecaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglecaptchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglecaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
