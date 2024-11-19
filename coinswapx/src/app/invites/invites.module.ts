import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitesPageRoutingModule } from './invites-routing.module';

import { InvitesPage } from './invites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitesPageRoutingModule
  ],
  declarations: [InvitesPage]
})
export class InvitesPageModule {}
