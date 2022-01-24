import { Component, OnInit } from '@angular/core';
import { Monument } from 'src/interfaces/monument';
import { MonumentService } from '../monument.service';

@Component({
  selector: 'app-monument',
  templateUrl: './monument.component.html',
  styleUrls: ['./monument.component.css']
})
export class MonumentComponent implements OnInit {

  monuments: Monument[] = [];

  constructor(
    private monumentService: MonumentService
  ) { }

  ngOnInit(): void {
    this.getMonuments();
  }

  getMonuments(): void {
    this.monumentService.getList()
      .subscribe(monuments => this.monuments = monuments);
  }

}
