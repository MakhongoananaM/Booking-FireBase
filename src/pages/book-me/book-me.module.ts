import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookMePage } from './book-me';

@NgModule({
  declarations: [
    BookMePage,
  ],
  imports: [
    IonicPageModule.forChild(BookMePage),
  ],
})
export class BookMePageModule {}
