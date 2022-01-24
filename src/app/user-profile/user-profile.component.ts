import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username = '';

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {

    if (this.cookieService.check('jwt')) {
      this.username = this.cookieService.get('userName');
    }
  }

}
