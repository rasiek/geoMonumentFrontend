import { Component, OnInit } from '@angular/core';
import { Celebrite } from 'src/interfaces/celebrite';
import { CelebriteService } from '../celebrite.service';

@Component({
  selector: 'app-celebrite',
  templateUrl: './celebrite.component.html',
  styleUrls: ['./celebrite.component.css']
})
export class CelebriteComponent implements OnInit {

  celebs: Celebrite[] = [];

  constructor(
    private celebService: CelebriteService
  ) { }

  ngOnInit(): void {

    this.celebService.getList()
      .subscribe({
        next: celebs => {
          this.celebs = celebs;
        },
        error: e => {
          console.log(e)
        }
      })
  }

}
