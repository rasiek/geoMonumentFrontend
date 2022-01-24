import { Component, OnInit } from '@angular/core';
import { Lieu } from 'src/interfaces/lieu';
import { LieuService } from '../lieu.service';

@Component({
  selector: 'app-lieu',
  templateUrl: './lieu.component.html',
  styleUrls: ['./lieu.component.css']
})
export class LieuComponent implements OnInit {

  lieux: Lieu[] = [];

  constructor(
    private lieuService: LieuService
  ) { }

  ngOnInit(): void {

    this.lieuService.getList()
      .subscribe({
        next: lieux => {
          this.lieux = lieux;
        },
        error: e => {
          console.log(e)
        }
      })
  }

}
