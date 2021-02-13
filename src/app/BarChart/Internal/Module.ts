import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './BarChartComponent';


@NgModule({
    declarations: [
        BarChartComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        BarChartComponent
    ]
})
export class Module { }