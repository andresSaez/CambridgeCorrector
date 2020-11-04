import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AppPage } from '../app.component';
import { a2, b1, b2, c1, c2 } from './levels';
import { ComponentScore, EnglishLevel, ExamCorrectionTemplate } from './models/english.models';
import { takeUntil } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { correctionA2, correctionB1, correctionB2, correctionC1, correctionC2 } from './corrections';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  public examForm: FormGroup =  new FormGroup({});
  public levels: EnglishLevel[] = [a2, b1, b2, c1, c2];
  public correctionTemplates: ExamCorrectionTemplate[] = [correctionA2, correctionB1, correctionB2, correctionC1, correctionC2];

  public currentExam: EnglishLevel = null;
  public currentCorrection: ExamCorrectionTemplate = null;
  private numberOfExamComponents: number = null;
  public componentsScore: ComponentScore[] = [];

  public folder: string;
  public appPage: AppPage = null;

  public score: number;
  public gradeObtained: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.folder) {
      this.currentExam = this.levels.find(level => level.id === this.folder.toUpperCase());
      this.currentCorrection = this.correctionTemplates.find(template => template.id === this.folder.toUpperCase());
      this.numberOfExamComponents = this.currentExam.components.length;
      this.buildForm();
    }
    this.appPage = this.router.getCurrentNavigation().extras.state.appPage;
    this.formSubscriptions();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  buildForm(): void {
    this.currentExam.components.forEach((component, i) => {
      const newFormGroup: FormGroup = new FormGroup({});
      this.componentsScore.push(null);
      component.parts.forEach((part, p) => {
        newFormGroup.addControl(`part${p}`, new FormControl('', [Validators.required, Validators.min(0), Validators.max(part.score)]));
      });
      this.examForm.addControl(`component${i}`, newFormGroup);
    });
  }

  public calculateScore(): void {
    this.score = (this.componentsScore.map(el => el.percentage)).reduce((ac, current) => ac + current) / this.componentsScore.length;
    this.gradeObtained = this.currentCorrection.correctionTemplate.some(e => this.score >= e[0] && this.score <= e[1]) ?
      this.currentCorrection.correctionTemplate.find(el => this.score >= el[0] && this.score <= el[1])[4] :
      `${this.currentCorrection.correctionTemplate[this.currentCorrection.correctionTemplate.length - 1][4]} - No result, CEFR level or certificate given`;
  }

  private formSubscriptions(): void {
    for (let index = 0; index < this.numberOfExamComponents; index++) {
      this.examForm.get(`component${index}`).valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(groupValue => {
        const values: any[] = Object.values(groupValue);

        if (values && values.every(v => v !== null && v !== undefined && v !== '') && this.examForm.get(`component${index}`).valid) {
          const totalPoints = values.reduce((accumulator, currentValue) => accumulator + currentValue);
          this.componentsScore[index] = {
            id: this.currentExam.components[index].id,
            totalPoints,
            percentage: (totalPoints /
              this.currentExam.components[index].maxScore) * 100
          };
        } else {
          this.componentsScore[index] = null;
        }
      });
    }
  }

  public navToHome(): void {
    this.navCtrl.navigateRoot('home');
  }
}
