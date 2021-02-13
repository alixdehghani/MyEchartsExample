import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BarChartModule } from 'src/app/BarChart/Index';
import { DoughnutModule } from 'src/app/DoughnutChart/Index';
import { Page2Component } from './Page2Component';

const routes: Routes = [
    {
        path: "", component: Page2Component
    }
];

@NgModule({
    declarations: [
        Page2Component
    ],
    imports: [
        RouterModule.forChild(routes),
        DoughnutModule
    ]
})
export class Module { }