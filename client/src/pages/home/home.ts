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
  locales: any = {
    'af-ZA': "Afrikaans (South Africa)",
    'sq-AL': "Albanian (Albania)",
    'ar-EG': "Arabic (Egypt)",
    'hy-AM': "Armenian (Armenia)",
    'bg-BG': "Bulgarian (Bulgaria)",
    'zh-Hans': "Chinese (Simplified Han)",
    'zh-Hant': "Chinese (Traditional Han)",
    'hr-HR': "Croatian (Croatia)",
    'cs-CZ': "Czech (Czech Republic)",
    'da-DK': "Danish (Denmark)",
    'nl-BE': "Dutch (Belgium)",
    'nl-NL': "Dutch (Netherlands)",
    'en-US': "English (United States)",
    'fil-PH': "Filipino (Philippines)",
    'fi-FI': "Finnish (Finland)",
    'fr-BE': "French (Belgium)",
    'fr-CA': "French (Canada)",
    'de-DE': "German (Germany)",
    'el-GR': "Greek (Greece)",
    'haw-US': "Hawaiian (United States)",
    'he-IL': "Hebrew (Israel)",
    'hi-IN': "Hindi (India)",
    'hu-HU': "Hungarian (Hungary)",
    'is-IS': "Icelandic (Iceland)",
    'id-ID': "Indonesian (Indonesia)",
    'ga-IE': "Irish (Ireland)",
    'it-IT': "Italian (Italy)",
    'ja-JP': "Japanese (Japan)",
    'pl-PL': "Polish (Poland)",
    'pt-PT': "Portuguese (Portugal)",
    'pa-Arab': "Punjabi (Arabic)",
    'ro-RO': "Romanian (Romania)",
    'ru-MD': "Russian (Moldova)",
    'ru-RU': "Russian (Russia)",
    'sr-Latn': "Serbian (Latin)",
    'sl-SI': "Slovenian (Slovenia)",
    'es-MX': "Spanish (Mexico)",
    'es-ES': "Spanish (Spain)",
    'es-US': "Spanish (United States)",
    'tr-TR': "Turkish (Turkey)",
    'uk-UA': "Ukrainian (Ukraine)",
    'vi-VN': "Vietnamese (Vietnam)",
    'zu-ZA': "Zulu (South Africa)"
  };
  localeKeys: any;
  speak: any = () => {
    console.log('this', this.locale)
  };

  constructor(
    public navCtrl: NavController,
    public auth: AuthService,
    public tts: TextToSpeech) {
      this.localeKeys = Object.keys(this.locales);
      
      document.addEventListener('deviceready', () => {
        this.speak = function () {
          tts.speak({
            text: this.message || 'Input a message',
            locale: this.locale || 'en-US',
            rate: this.rate / 100 || 0.5
          }).catch((err) => {
            alert('Locale: ' + this.locale + ' is not supported on your device.');
          });
        }
      });
  }
}
