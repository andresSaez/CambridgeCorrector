import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets  } from 'chart.js';
import { ComponentScore, ExamCorrectionTemplate } from '../../models/english.models';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GraphComponent implements OnInit {
  @Input() correctionTemplate: ExamCorrectionTemplate;
  @Input() componentsScore: ComponentScore[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Percentage (%)',
          },
          ticks: {
            beginAtZero: true,
            stepSize: 10,
            max: 100
          }
        }
      ]
    }
  };
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = false;

  public barChartData: ChartDataSets[] = [];
  public barChartLabels: string[] = [];
  public legend: { value: string, label: string}[] = [];

  constructor() { }

  ngOnInit() {
    this.buildChart();
  }

  private buildChart(): void {
    this.barChartLabels = this.correctionTemplate.components.map(t => t.id);

    const chartData = [];
    this.barChartLabels.forEach(el => {
      const dataSet = this.componentsScore.find(e => e.id === el);
      const legendData = this.correctionTemplate.components.find(c => c.id === el);
      this.legend.push({ value: legendData.id, label: legendData.title });
      chartData.push(Math.trunc(dataSet.percentage));
    });

    this.barChartData.push({ data: chartData, backgroundColor: this.correctionTemplate.background });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
