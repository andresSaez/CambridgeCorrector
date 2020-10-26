import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets  } from 'chart.js';
import { ComponentScore, ExamCorrectionTemplate } from '../../models/english.models';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @Input() correctionTemplate: ExamCorrectionTemplate;
  @Input() componentsScore: ComponentScore;

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true
        }
      ],
      yAxes: [
        {
          stacked: true
        }
      ]
    }
  };
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  // public barChartData: ChartDataSets[] = [
  //   { data: [3, 5], label: 'Approved', stack: 'a'  },
  //   { data: [2, 8], label: 'Accepted', stack: 'a'  },
  //   { data: [4, 10], label: 'Open', stack: 'a'  },
  //   { data: [2, 2], label: 'In Progress',  stack: 'a'},
  // ];

  public barChartData: ChartDataSets[] = [];
  public barChartLabels: string[] = [];

  constructor() { }

  ngOnInit() {
    this.buildChart();
  }

  private buildChart(): void {
    this.barChartLabels = this.correctionTemplate.components.map(t => t.id);

    this.barChartData = this.correctionTemplate.components.map(component => {
       const data = { data: [3, 5, 4, 1], label: component.title, stack: 'a'};
       return data;
      });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
