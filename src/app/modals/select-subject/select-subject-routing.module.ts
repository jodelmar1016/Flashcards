import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectSubjectPage } from './select-subject.page';

const routes: Routes = [
  {
    path: '',
    component: SelectSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectSubjectPageRoutingModule {}
