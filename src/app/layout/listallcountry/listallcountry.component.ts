import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CountryService } from '../../country.service';
import { Observable } from 'rxjs';
import { Country } from '../../country';

@Component({
    selector: 'app-listallcountry',
    templateUrl: './listallcountry.component.html',
    styleUrls: ['./listallcountry.component.scss'],
    animations: [routerTransition()]
})


export class ListAllCountryComponent implements OnInit {

  private countries:Country[];
  
  constructor(private countryService: CountryService) { }

  /*
   reloadData() {
    this.countries = this.countryService.getCountryList();
  }
  */
  ngOnInit() {
//	this.reloadData();
    this.countryService.getAllCountry().subscribe((countries)=>{
      console.log(countries);
      this.countries=countries;
    },(error)=>{
      console.log(error);
    })
  }
}