import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';
import { User } from 'src/interfaces/user';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  user: User = {} as User;
  addValid: boolean = true;

  signupForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })



  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user.userName = this.signupForm.value['userName'];
    this.user.password = this.signupForm.value['password'];
    this.user.roles = 'USER';
    this.user.isActive = true;

    this.authenticationService.signup(this.user).subscribe({
      next: user => {
        this.addValid = true;
        this.user = user;
        console.log(this.user);
        console.log(user);
      },
      error: _ => this.addValid = false
    });
    this.authenticationService.login(this.user.userName, this.user.password)
      .subscribe({
        next: data => {
          this.cookieService.set('jwt', data.jwt);
          this.cookieService.set('userName', this.user.userName);
          this.router.navigateByUrl('/home');
        },
      });
  }

}
