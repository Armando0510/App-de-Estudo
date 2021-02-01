import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticaprivacidadePage } from './politicaprivacidade.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticaprivacidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticaprivacidadePageRoutingModule {}
