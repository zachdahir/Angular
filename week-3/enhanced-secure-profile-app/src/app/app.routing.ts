/**
 * Title: app.routing.ts
 * Author: Zachary Dahir
 * Date: 7-22-20
 * Description: App routing
 */
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component'
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    canActivate: [SignInGuard],
    component: HomeComponent
  }
]
