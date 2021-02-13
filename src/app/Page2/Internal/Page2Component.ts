import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page2',
    template: `<app-bar-chart [colorPallet]="colorPalette"></app-bar-chart>`
})

export class Page2Component implements OnInit {
    constructor() { }
    colorPalette = ["#081607","#0C220A","#143B12","#1F5B1B","#2D8428","#369E2F","#3FB737","#6FC969","#8BD386","#B2E2AF","#D9F1D7"];
    ngOnInit() { }
}