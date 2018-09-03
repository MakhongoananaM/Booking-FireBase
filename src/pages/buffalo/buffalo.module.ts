import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuffaloPage } from './buffalo';

@NgModule({
  declarations: [
    BuffaloPage,
  ],
  imports: [
    IonicPageModule.forChild(BuffaloPage),
  ],
})
export class BuffaloPageModule {}
