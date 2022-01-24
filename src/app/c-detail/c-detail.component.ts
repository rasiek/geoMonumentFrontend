import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Celebrite } from 'src/interfaces/celebrite';
import { CelebriteService } from '../celebrite.service';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-c-detail',
  templateUrl: './c-detail.component.html',
  styleUrls: ['./c-detail.component.css']
})
export class CDetailComponent implements OnInit {

  celeb = {} as Celebrite;
  wiki = {} as any;

  constructor(
    private celebService: CelebriteService,
    private route: ActivatedRoute,
    private router: Router,
    private wikiService: WikiService
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));



    this.celebService.get(id).subscribe({
      next: celeb => {
        this.celeb = celeb
        this.wikiService.getSummary(`${celeb.prenom} ${celeb.nom}`).subscribe(summary => this.wiki = summary);
      },
      error: _ => this.router.navigateByUrl('/lieu')
    })
  }

}
