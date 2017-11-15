import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmbientPage } from './ambient';

@NgModule({
  declarations: [
    AmbientPage,
  ],
  imports: [
    IonicPageModule.forChild(AmbientPage),
  ],
})
export class AmbientPageModule {}
