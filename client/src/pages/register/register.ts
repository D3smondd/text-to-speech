import { AuthService, User } from './../../app/services/authService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AuthService]
})
export class RegisterPage {
  user: User = new User();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthService) {
      console.log('auth:', auth.currentUser)
  }

  ionViewDidLoad() {
    if (this.auth.currentUser.id) {
      console.log('current user');
    }
  }
}
