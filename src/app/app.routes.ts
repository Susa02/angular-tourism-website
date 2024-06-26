import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DistrictsComponent } from './components/districts/districts.component';
import { DistrictDetailsComponent } from './pages/district-details/district-details.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveLoginComponent } from './components/reactive-login/reactive-login.component';



export const routes: Routes = [
   {
    path: '', component: HomeComponent
   },
   {
    path: 'districts/:id', component: DistrictsComponent
   },
   {
      path: 'districts-list', component: DistrictDetailsComponent
   },
   {
      path:'auth', component:  AuthComponent
   },
   {
      path:'sign-up', component:  SignUpComponent
   }
]
