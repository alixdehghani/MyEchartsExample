import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
echarts.use([TooltipComponent, PieChart, SVGRenderer, LegendComponent]);


@Component({
    selector: 'app-doughnut-chart',
    template: `<div #Echarts></div>`
})

export class DoughnutChartWidgetComponent implements OnInit {
    @Input('colorPallet') private _colorPalette: string[];
    private _textColor: string;
    private _charColorPalette: string[];
    private _legendData: string[];
    private _seriesData: any[];


    private _options: object;

    @ViewChild('Echarts', { static: true }) private _echartsElementRef: ElementRef;




    ngOnInit() {
        this._charColorPalette = this._colorPalette;

        const result = [
            {
                Legend: 'شنبه',
                Data: 24
            },
            {
                Legend: 'یک شنبه',
                Data: 31
            },
            {
                Legend: 'دو شنبه',
                Data: 14
            },
            {
                Legend: 'سه شنبه',
                Data: 7
            },
            {
                Legend: 'چهار شنبه',
                Data: 44
            },
            {
                Legend: 'پنبج شنبه',
                Data: 5
            },
            {
                Legend: 'جمعه',
                Data: 18
            },
        ]
        this._legendData = result.map(r => r.Legend);

        this._seriesData = result.map(r => ({
            name: r.Legend,
            value: r.Data
        }));

        this._setParams();


    }

    private _setParams(): void {
        this._textColor = '#000';
        this._options = {
            color: this._charColorPalette,
            textStyle: {
                color: this._textColor,
                fontFamily: 'IranSans',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 0,
                textStyle: {
                    color: this._textColor,
                },
                data: this._legendData
            },
            series: [
                {
                    name: 'doughnut chart',
                    type: 'pie',
                    radius: ['45%', '65%'],
                    center: ['65%', '50%'],
                    avoidLabelOverlap: true,
                    data: this._seriesData
                }
            ]
        }

        var myChart = echarts.init(this._echartsElementRef.nativeElement,null, {renderer: 'svg', height:400,width:600});
        myChart.setOption({
            ...this._options
        });
    }
}
