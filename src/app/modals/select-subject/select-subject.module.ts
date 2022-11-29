import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectSubjectPageRoutingModule } from './select-subject-routing.module';

import { SelectSubjectPage } from './select-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectSubjectPageRoutingModule
  ],
  declarations: [SelectSubjectPage]
})
export class SelectSubjectPageModule {}
