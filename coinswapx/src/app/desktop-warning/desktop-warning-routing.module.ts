import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesktopWarningPage } from './desktop-warning.page';

const routes: Routes = [
  {
    path: '',
    component: DesktopWarningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesktopWarningPageRoutingModule {}
