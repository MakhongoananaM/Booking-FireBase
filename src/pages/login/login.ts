import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../node_modules/firebase';
import { AngularFireAuth } from  'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { BookMePage } from '../book-me/book-me';
import { ElephantPage } from '../elephant/elephant';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
  async login(user){
    try{
    
    const results = this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password)
   if  (results)
   this.navCtrl.setRoot(BookMePage)
  }
 catch (e) {
   console.error(e)
 }
}
 register(){
 this.navCtrl.push(RegisterPage)

 }
 Back(){
  this.navCtrl.push(ElephantPage)
}

}
