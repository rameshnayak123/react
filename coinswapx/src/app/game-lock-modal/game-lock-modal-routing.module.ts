import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameLockModalPage } from './game-lock-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GameLockModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameLockModalPageRoutingModule {}
