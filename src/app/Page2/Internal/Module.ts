import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NgxEchartsModule } from 'ngx-echarts';
import { BarChartModule } from 'src/app/BarChart/Index';
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
        NgxEchartsModule.forChild(),
        RouterModule.forChild(routes),
        BarChartModule
    ]
})
export class Module { }