import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrastavelPageRoutingModule } from './arrastavel-routing.module';

import { ArrastavelPage } from './arrastavel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrastavelPageRoutingModule
  ],
  declarations: [ArrastavelPage]
})
export class ArrastavelPageModule {}
