import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountyPageComponent } from './pages/by-county-page/by-county-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountyPageComponent,
    ByRegionPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
