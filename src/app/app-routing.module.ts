import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'help-page',
    loadChildren: () => import('./help-page/help-page.module').then( m => m.HelpPagePageModule)
  },
  {
    path: 'card-list',
    loadChildren: () => import('./card-list/card-list.module').then( m => m.CardListPageModule)
  },
  {
    path: 'edit-modal',
    loadChildren: () => import('./modals/edit-modal/edit-modal.module').then( m => m.EditModalPageModule)
  },
  {
    path: 'select-subject',
    loadChildren: () => import('./modals/select-subject/select-subject.module').then( m => m.SelectSubjectPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'add-cards',
    loadChildren: () => import('./modals/add-cards/add-cards.module').then( m => m.AddCardsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
