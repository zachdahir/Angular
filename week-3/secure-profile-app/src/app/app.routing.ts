/**
 * Title: app.routing.ts
 * Author: Zachary Dahir
 * Date: 7-20-20
 * Description: App routing
 */
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component'

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
