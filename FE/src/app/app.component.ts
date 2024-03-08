import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FE';
  currentLang = "";

  constructor(private translateService: TranslateService) {
    this.currentLang = localStorage.getItem('lang') || 'en-US';
    this.setLang(this.currentLang);
  }

  changeLang(event: any) {
    this.currentLang = event.target.value;
    this.setLang(this.currentLang);
  }

  setLang(lang: string) {
    const languageCode = this.currentLang.split('-')[0];
    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);
    localStorage.setItem('lang', this.currentLang);
  }

}
