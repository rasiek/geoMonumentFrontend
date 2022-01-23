import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { MonumentComponent } from './monument/monument.component';
import { LieuComponent } from './lieu/lieu.component';
import { CelebriteComponent } from './celebrite/celebrite.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommentsComponent } from './comments/comments.component';
import { MDetailComponent } from './m-detail/m-detail.component';
import { DatePipe } from './date.pipe';
import { LDetailComponent } from './l-detail/l-detail.component';
import { CDetailComponent } from './c-detail/c-detail.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MonumentComponent,
    LieuComponent,
    CelebriteComponent,
    UserComponent,
    UserProfileComponent,
    ProfileComponent,
    CommentsComponent,
    MDetailComponent,
    DatePipe,
    LDetailComponent,
    CDetailComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatListModule,
    MatSnackBarModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
