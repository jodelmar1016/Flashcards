import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCardsPage } from './add-cards.page';

const routes: Routes = [
  {
    path: '',
    component: AddCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCardsPageRoutingModule {}
