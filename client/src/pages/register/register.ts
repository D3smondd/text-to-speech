import { User, AuthService } from './../../app/services/authService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AuthService]
})
export class RegisterPage {
  user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthService) {
      this.user = new User();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
