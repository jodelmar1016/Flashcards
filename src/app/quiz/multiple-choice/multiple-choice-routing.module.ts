import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleChoicePage } from './multiple-choice.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleChoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleChoicePageRoutingModule {}
