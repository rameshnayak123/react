import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurvepathPage } from './curvepath.page';

const routes: Routes = [
  {
    path: '',
    component: CurvepathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurvepathPageRoutingModule {}
