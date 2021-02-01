import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticaprivacidadePageRoutingModule } from './politicaprivacidade-routing.module';

import { PoliticaprivacidadePage } from './politicaprivacidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticaprivacidadePageRoutingModule
  ],
  declarations: [PoliticaprivacidadePage]
})
export class PoliticaprivacidadePageModule {}
