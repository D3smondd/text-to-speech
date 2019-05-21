import { AuthService } from './../../app/services/authService';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TtsService } from '../../app/services/ttsService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthService, TtsService]
})
export class HomePage {
  message: string;
  rate: number;
  locale: string;

  constructor(
    public navCtrl: NavController,
    public auth: AuthService,
    public tts: TtsService) {

  }
}
