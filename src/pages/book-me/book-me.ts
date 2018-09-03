import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from  'angularfire2/auth';
import { BookPage } from '../book/book';
import { RhinoPage } from '../rhino/rhino';
import { ElephantPage } from '../elephant/elephant';
import { LionPage } from '../lion/lion';
import { BuffaloPage } from '../buffalo/buffalo';
import { LeopardPage } from '../leopard/leopard';

/**
 * Generated class for the BookMePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-me',
  templateUrl: 'book-me.html',
})
export class BookMePage {

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public toast: ToastController) {
  }

  ionViewDidLoad() {
    
  this.afAuth.authState.subscribe(data => console.log(data => {
    if (data && data.email && data.uid){
    this.toast.create({
      message: 'Welcome to Hotel, ${data.email}',
      duration: 3000
    }).present();
  }
  else{
    this.toast.create({
      message: 'Could not find authentification details',
      duration: 3000
    }).present();
  }
  }));
}
Back(){
  this.navCtrl.push(BookPage)
}
rino(){
  this.navCtrl.push(RhinoPage)
}
ele(){
this.navCtrl.push(ElephantPage)
}
lion(){
  this.navCtrl.push(LionPage)
}
buffalo(){
  this.navCtrl.push(BuffaloPage) 
}
Leopard(){
  this.navCtrl.push(LeopardPage)  
}

}
