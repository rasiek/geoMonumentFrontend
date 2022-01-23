import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Monument } from 'src/interfaces/monument';
import { MonumentService } from './monument.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'geotagFrontEnd';
  authenticated = false;

  constructor(
    private cookieService: CookieService
  ) { }


  ngOnInit(): void {
    this.authenticated = this.cookieService.check('jwt');
  }
}
