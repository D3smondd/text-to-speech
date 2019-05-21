import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Injectable } from '@angular/core';

@Injectable()
export class TtsService {
    constructor(private tts: TextToSpeech) { }

    talk(message: string, rate: number, locale: string): Promise<void> {
        console.log(message, rate, locale)
        return this.tts.speak({
            text: message,
            locale: locale,
            rate: rate/100
        })
            .catch((reason: any) => console.log('TTS failed:', reason))
    }
}

