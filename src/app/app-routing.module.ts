import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebriteComponent } from './celebrite/celebrite.component';
import { HomeComponent } from './home/home.component';
import { LieuComponent } from './lieu/lieu.component';
import { LoginComponent } from './login/login.component';
import { MonumentComponent } from './monument/monument.component';
import { SignupComponent } from './signup/signup.component';
import { UserGuardGuard } from './user-guard.guard';
import { UserComponent } from './user/user.component';
import { MDetailComponent } from './m-detail/m-detail.component';
import { LDetailComponent } from './l-detail/l-detail.component';
import { CDetailComponent } from './c-detail/c-detail.component';
import { LogoutComponent } from './logout/logout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'm-detail/:id', component: MDetailComponent },
  { path: 'l-detail/:id', component: LDetailComponent },
  { path: 'c-detail/:id', component: CDetailComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'monument',
    component: MonumentComponent
  },
  {
    path: 'celebrite',
    children: [
      { path: '', component: CelebriteComponent }
    ]
  },
  {
    path: 'lieu',
    children: [
      { path: '', component: LieuComponent }
    ]
  },
  {
    path: 'user',
    canActivate: [UserGuardGuard],
    children: [
      { path: '', component: UserComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
