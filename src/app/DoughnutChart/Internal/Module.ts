import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoughnutChartWidgetComponent } from './DoughnutChartComponent';


@NgModule({
    declarations: [
        DoughnutChartWidgetComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        DoughnutChartWidgetComponent
    ]
})
export class Module { }