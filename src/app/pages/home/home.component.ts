import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

interface HomeTranslations {
  title: string;
  subtitle: string;
  cv_btn: string;
  cl_btn: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  langService = inject(LanguageService);

  get t(): HomeTranslations {
    return this.langService.getTranslation('home') as HomeTranslations;
  }
}