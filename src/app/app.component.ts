import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  langService = inject(LanguageService);
  title = 'naor-barazani';


  getDownloadLink(): string {
    return this.langService.lang() === 'he' 
      ? 'assets/נאור_ברזני_CV.pdf' 
      : 'assets/Naor_Barazani_CV.pdf';
  }

  
  getFileName(): string {
    return this.langService.lang() === 'he' 
      ? 'Naor_Barazani_CV_HE.pdf' 
      : 'Naor_Barazani_CV_EN.pdf';
  }
}