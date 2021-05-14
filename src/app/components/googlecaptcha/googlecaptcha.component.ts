import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-googlecaptcha',
  templateUrl: './googlecaptcha.component.html',
  styleUrls: ['./googlecaptcha.component.css'],
})
export class GooglecaptchaComponent implements OnInit {
  siteKey: string;
  aFormGroup = new FormControl(null);
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.siteKey = '6Led9NQaAAAAAEha-tixAHUrHeBZRtG5ePXlhhsI';
  }
}
