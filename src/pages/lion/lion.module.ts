import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LionPage } from './lion';

@NgModule({
  declarations: [
    LionPage,
  ],
  imports: [
    IonicPageModule.forChild(LionPage),
  ],
})
export class LionPageModule {}
