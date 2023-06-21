import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-county-page',
  templateUrl: './by-county-page.component.html',
  styles: [
  ]
})
export class ByCountyPageComponent {
  constructor(private countriesServicse:CountriesService){}

  public countries:Country[] = []

  searchByName(term:string):void{
   this.countriesServicse.searchCountry(term).subscribe(countries =>{
    this.countries = countries
   })
  }
}
