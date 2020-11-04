import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ExamCorrectionTemplate } from '../../models/english.models';

@Component({
  selector: 'app-correction-table',
  templateUrl: './correction-table.component.html',
  styleUrls: ['./correction-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CorrectionTableComponent implements OnInit {
  @Input() correctionTemplate: ExamCorrectionTemplate;

  constructor() { }

  ngOnInit() {}

}
