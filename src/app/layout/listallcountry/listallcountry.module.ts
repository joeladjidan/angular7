import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { List-All-CountryModule as Ng2Charts } from 'ng2-charts';

import { ListAllCountryRoutingModule } from './listallcountry-routing.module';
import { ListAllCountryComponent } from './listallcountry.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule,ListAllCountryRoutingModule, PageHeaderModule],
    declarations: [ListAllCountryComponent]
})
export class ListAllCountryModule {}
