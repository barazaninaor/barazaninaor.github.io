import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TRANSLATIONS } from '../../i18n/translations';

@Component({
  selector: 'app-cover-letter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cover-letter.component.html',
  styleUrl: './cover-letter.component.css'
})
export class CoverLetterComponent {
  private langService = inject(LanguageService);

  t = computed(() => {
    const currentLang = this.langService.lang(); 
    return TRANSLATIONS.coverLetter[currentLang];
  });
}