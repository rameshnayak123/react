import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TapToHoldPageRoutingModule } from './tap-to-hold-routing.module';

import { TapToHoldPage } from './tap-to-hold.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TapToHoldPageRoutingModule
  ],
  declarations: [TapToHoldPage]
})
export class TapToHoldPageModule {}
