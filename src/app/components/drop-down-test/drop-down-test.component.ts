import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryStateService } from './../../Services/country-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-test',
  templateUrl: './drop-down-test.component.html',
  styleUrls: ['./drop-down-test.component.css'],
})
export class DropDownTestComponent implements OnInit {
  constructor(
    private countryState: CountryStateService,
    private fb: FormBuilder
  ) {}

  countries: any;
  cities: any;
  countryForm: FormGroup;
  ngOnInit(): void {
    this.countryState.getCountry().subscribe((res: any) => {
      this.countries = res.data;
    });
    this.countryForm = this.fb.group({
      country: [null],
      city: [null],
    });
    this.countryForm.get('country').valueChanges.subscribe((res) => {
      this.cities = this.countries[res].cities;
    });
  }
}
