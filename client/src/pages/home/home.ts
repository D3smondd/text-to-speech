import { AuthService } from './../../app/services/authService';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthService]
})
export class HomePage {
  message: string;
  rate: number;
  locale: string;

  constructor(
    public navCtrl: NavController,
    public auth: AuthService,
    private tts: TextToSpeech) {
  }
}
