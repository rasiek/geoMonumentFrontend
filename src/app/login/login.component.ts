import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginValid: Boolean = true;
  userName: string = '';
  password: string = '';

  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })


  constructor(
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }


  onSubmit() {

    this.userName = this.loginForm.value['userName']
    this.password = this.loginForm.value['password']

    this.authenticationService.login(this.userName, this.password)
      .subscribe({
        next: data => {
          this.loginValid = true;
          this.cookieService.set('jwt', data.jwt);
          this.cookieService.set('userName', this.userName);
          this.router.navigateByUrl('/home');
        },
        error: _ => this.loginValid = false
      });
  }



  ngOnInit(): void {
  }

}
