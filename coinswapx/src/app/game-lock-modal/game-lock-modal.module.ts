import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameLockModalPageRoutingModule } from './game-lock-modal-routing.module';

import { GameLockModalPage } from './game-lock-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameLockModalPageRoutingModule
  ],
  declarations: [GameLockModalPage]
})
export class GameLockModalPageModule {}
