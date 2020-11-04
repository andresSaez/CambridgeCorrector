import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ChartsModule } from 'ng2-charts';
import { GraphComponent } from './components/graph/graph.component';
import { CorrectionTableComponent } from './components/correction-table/correction-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ChartsModule
  ],
  declarations: [FolderPage, GraphComponent, CorrectionTableComponent]
})
export class FolderPageModule {}
