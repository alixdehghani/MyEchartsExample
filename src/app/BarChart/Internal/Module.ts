import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarChartComponent } from './BarChartComponent';


@NgModule({
    declarations: [
        BarChartComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgxEchartsModule
    ],
    exports: [
        BarChartComponent
    ]
})
export class Module { }