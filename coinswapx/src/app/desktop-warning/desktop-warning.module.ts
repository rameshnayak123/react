import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesktopWarningPageRoutingModule } from './desktop-warning-routing.module';

import { DesktopWarningPage } from './desktop-warning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesktopWarningPageRoutingModule
  ],
  declarations: [DesktopWarningPage]
})
export class DesktopWarningPageModule {}
