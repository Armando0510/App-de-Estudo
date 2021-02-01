import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarcontaPageRoutingModule } from './criarconta-routing.module';

import { CriarcontaPage } from './criarconta.page';

import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarcontaPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [CriarcontaPage]
})
export class CriarcontaPageModule {}
