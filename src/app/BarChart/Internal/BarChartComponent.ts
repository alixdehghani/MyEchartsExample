import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-bar-chart',
    template: `<div echarts [options]="options"></div>`
})

export class BarChartComponent implements OnInit {
    @Input('colorPallet') private _colorPallet: string[];
    private _textColor: string;
    private _charColorPalette: string[];
    private _legend: object;
    private _xAxis: object;
    private _yAxis: object;
    private _series: object[] = [];


    options: object;


    ngOnInit() {
        this._charColorPalette = this._colorPallet;
        this._xAxis = {
            type: 'value',
        };
        this._yAxis = {
            type: 'category',
            data: ['شنبه', 'یک شنبه', 'دو شنبه', 'سه شنبه', 'چهار شنبه', 'پنج شنبه', 'جمعه'],
            axisLabel: {
                interval: 0,
                rotate: 15,
            }
        };

        const result = [
            {
                Legend: "کارکرد",
                Stack: "Direct",
                Data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                Legend: "کارنکرد",
                Stack: "Direct",
                Data: [120, 132, 101, 134, 490, 230, 210]
            },
            {
                Legend: "مرخصی",
                Stack: "Direct1",
                Data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                Legend: "غیرمرخصی",
                Stack: "Direct1",
                Data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                Legend: "تشویقی",
                Stack: "Direct3",
                Data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
        this._legend = {
            data: result.map(r => r.Legend),
            bottom: 0,
            show: result.length > 1
        };

        this._series = result.map(r => ({
            name: r.Legend,
            type: 'bar',
            stack: r.Stack,
            data: r.Data
        }));

        this._setParams();

    }

    private _setParams(): void {
        
        this._textColor = '#000';
        this.options = {
            color: this._charColorPalette,
            textStyle: {
                color: this._textColor,
                fontFamily: 'IranSans',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '8%',
                top: '3%',
                containLabel: true
            },
            xAxis: {
                ...this._xAxis,
                axisLine: {
                    lineStyle: {
                        color: this._textColor
                    }
                }
            },
            yAxis: {
                ...this._yAxis,
                axisLine: {
                    lineStyle: {
                        color: this._textColor
                    }
                }
            },
            legend: {
                ...this._legend,
                textStyle: {
                    color: this._textColor,
                }
            },
            series: this._series
        }
    }
}