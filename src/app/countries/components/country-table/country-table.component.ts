import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import {Input} from '@angular/core'
@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img{
      width:25px;
    }`
  ]
})
export class CountryTableComponent {
  @Input()
  public countries:Country[] = [];


}
