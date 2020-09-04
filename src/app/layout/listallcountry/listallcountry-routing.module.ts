import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAllCountryComponent } from './listallcountry.component';

const routes: Routes = [
    {
        path: '',
        component: ListAllCountryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListAllCountryRoutingModule {}
