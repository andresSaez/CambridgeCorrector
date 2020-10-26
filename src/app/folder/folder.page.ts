import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AppPage } from '../app.component';
import { a2, b1, b2, c1, c2 } from './levels';
import { ComponentScore, EnglishLevel, ExamCorrectionTemplate } from './models/english.models';
import { takeUntil } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { correctionA2 } from './corrections';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  public examForm: FormGroup =  new FormGroup({});
  public levels: EnglishLevel[] = [a2, b1, b2, c1, c2];
  public correctionTemplates: ExamCorrectionTemplate[] = [correctionA2];

  public currentExam: EnglishLevel = null;
  public currentCorrection: ExamCorrectionTemplate = null;
  private numberOfExamComponents: number = null;
  public componentsScore: ComponentScore[] = [];

  public folder: string;
  public appPage: AppPage = null;

  public score: number;

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
    console.log('calculateScore');
    this.score = (this.componentsScore.map(el => el.percentage)).reduce((ac, current) => ac + current) / this.componentsScore.length;
  }

  private formSubscriptions(): void {
    for (let index = 0; index < this.numberOfExamComponents; index++) {
      this.examForm.get(`component${index}`).valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(groupValue => {
        const values: any[] = Object.values(groupValue);
        // TODO
        if (values && values.every(v => v && v !== null && v !== undefined && v !== '') && this.examForm.get(`component${index}`).valid) {
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
