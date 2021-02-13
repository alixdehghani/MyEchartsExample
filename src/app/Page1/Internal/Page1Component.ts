import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page1',
    template: `<app-bar-chart [colorPallet]="colorPalette"></app-bar-chart>
    <app-bar-chart [colorPallet]="colorPalette.reverse()"></app-bar-chart>`
})

export class Page1Component implements OnInit {
    constructor() { }
    colorPalette = ["#1A0011", "#28011A", "#45012D", "#6C0246", "#9C0365", "#BA0379", "#D8048C", "#E243A9", "#E767B9", "#EF9BD1", "#F7CDE8"];
    ngOnInit() { }
}