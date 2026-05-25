import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS } from '../i18n/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  // הגדרת נתוני הקבצים כ-Getter כדי שיהיו זמינים בכל האפליקציה
  get cvFiles() {
    return {
      he: { path: 'נאור_ברזני_CV.pdf', name: 'Naor_Barazani_CV_HE.pdf' },
      en: { path: 'Naor_Barazani_CV.pdf', name: 'Naor_Barazani_CV_EN.pdf' }
    };
  }

  // מקבל את הקובץ לפי השפה הנוכחית
  get currentCvFile() {
    return this.cvFiles[this.lang()];
  }

  private getInitialLang(): 'he' | 'en' {
    const savedLang = localStorage.getItem('user_lang');
    return savedLang === 'he' ? 'he' : 'en';
  }

  lang = signal<'he' | 'en'>(this.getInitialLang());

  constructor() {
    this.updateDirection();
  }

  getTranslation(page: keyof typeof TRANSLATIONS) {
    return TRANSLATIONS[page][this.lang()];
  }

  toggle() {
    const newLang = this.lang() === 'he' ? 'en' : 'he';
    this.lang.set(newLang);
    localStorage.setItem('user_lang', newLang);
    this.updateDirection();
  }

  private updateDirection() {
    const currentLang = this.lang();
    document.dir = currentLang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }
}