import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrastavelPage } from './arrastavel.page';

const routes: Routes = [
  {
    path: '',
    component: ArrastavelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrastavelPageRoutingModule {}
