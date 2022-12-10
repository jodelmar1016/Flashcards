import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCardsPageRoutingModule } from './add-cards-routing.module';

import { AddCardsPage } from './add-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddCardsPageRoutingModule
  ],
  declarations: [AddCardsPage]
})
export class AddCardsPageModule {}
