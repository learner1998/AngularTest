import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryStateService {
  constructor(private http: HttpClient) {}

  getCountry() {
    return this.http.get('https://countriesnow.space/api/v0.1/countries');
  }
}
// https://countriesnow.space/api/v0.1/countries
