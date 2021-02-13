import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NgxEchartsModule } from 'ngx-echarts';
import { BarChartModule } from 'src/app/BarChart/Index';
import { Page1Component } from './Page1Component';

const routes: Routes = [
    {
        path: "", component: Page1Component
    }
];

@NgModule({
    declarations: [
        Page1Component
    ],
    imports: [
        NgxEchartsModule.forChild(),
        RouterModule.forChild(routes),
        BarChartModule
    ]
})
export class Module { }