import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS } from '../i18n/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  // Checks the browser's localStorage for a saved language preference.
  // Defaults to English ('en') on the first visit if no preference is stored.
  private getInitialLang(): 'he' | 'en' {
    const savedLang = localStorage.getItem('user_lang');
    return savedLang === 'he' ? 'he' : 'en';
  }

  // Initializes the language signal with the detected or default language
  lang = signal<'he' | 'en'>(this.getInitialLang());

  constructor() {
    // Sets the correct document direction and language attributes on application startup
    this.updateDirection();
  }

  // Retrieves the translation object for a specific page based on the active language
  getTranslation(page: keyof typeof TRANSLATIONS) {
    return TRANSLATIONS[page][this.lang()];
  }

  // Switches between Hebrew and English, persists the selection in localStorage,
  // and updates the layout direction dynamically
  toggle() {
    const newLang = this.lang() === 'he' ? 'en' : 'he';
    this.lang.set(newLang);
    
    // Saves the newly selected language to the browser storage to survive page refreshes
    localStorage.setItem('user_lang', newLang);
    
    this.updateDirection();
  }

  // Dynamically syncs the HTML document global direction (RTL/LTR) and lang attribute
  private updateDirection() {
    const currentLang = this.lang();
    document.dir = currentLang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }
}