import { AuthService, Authentication } from './../../app/services/authService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class LoginPage {
  user: Authentication = {
    username: '',
    password: ''
  };
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
