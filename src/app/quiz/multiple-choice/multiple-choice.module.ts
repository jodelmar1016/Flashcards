import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultipleChoicePageRoutingModule } from './multiple-choice-routing.module';

import { MultipleChoicePage } from './multiple-choice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultipleChoicePageRoutingModule
  ],
  declarations: [MultipleChoicePage]
})
export class MultipleChoicePageModule {}
