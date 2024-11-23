import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CurvepathPage } from './curvepath.page';
import { CurvepathPageRoutingModule } from './curvepath-routing.module';

@NgModule({
  declarations: [CurvepathPage],  // Declare the page component
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurvepathPageRoutingModule
  ]
})
export class CurvepathModule {}
