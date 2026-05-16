import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CvComponent } from './pages/cv/cv.component';
import { CoverLetterComponent } from './pages/cover-letter/cover-letter.component';
import { BaseContentComponent } from './components/base-content/base-content.component';

export const routes: Routes = [
  // 1. Root redirect: If the path is entirely empty, redirect immediately to '/home'.
  // This must be placed first to avoid getting trapped by the empty path of the BaseContentComponent layout.
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // 2. Home page: Rendered directly inside the main app component, without the top navigation bar.
  { path: 'home', component: HomeComponent },
  
  // 3. Inner content pages: Nested under the BaseContentComponent layout, which provides the top navigation bar.
  {
    path: '',
    component: BaseContentComponent,
    children: [
      { path: 'cv', component: CvComponent },
      { path: 'cover-letter', component: CoverLetterComponent }
    ]
  },

  // 4. Wildcard fallback: Re-route any unmatched or invalid URLs back to the home page.
  { path: '**', redirectTo: '/home' }
];