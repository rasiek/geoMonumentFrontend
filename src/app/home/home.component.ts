import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  btns: string[] = ['monument', 'lieu', 'celebrite', 'profile'];
  authenticated: boolean = false;
  welcome = 'Bonjour';

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {

    if (this.cookieService.check('jwt')) {
      this.welcome = `Bonjour, ${this.cookieService.get('userName')}`
    }


  }

}
