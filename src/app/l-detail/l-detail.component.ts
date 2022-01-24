import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lieu } from 'src/interfaces/lieu';
import { LieuService } from '../lieu.service';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-l-detail',
  templateUrl: './l-detail.component.html',
  styleUrls: ['./l-detail.component.css']
})
export class LDetailComponent implements OnInit {

  lieu = {} as Lieu;
  wiki = {} as any;
  center = {} as google.maps.LatLngLiteral;
  zoom = 13;
  notFound = 'Pas de description pour cette Ressource';

  constructor(
    private lieuService: LieuService,
    private route: ActivatedRoute,
    private router: Router,
    private wikiService: WikiService
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));



    this.lieuService.get(id).subscribe({
      next: lieu => {
        this.lieu = lieu
        let lat = lieu.longitude
        let cen: google.maps.LatLngLiteral = { lat: lat, lng: lieu.latitude };
        this.center = cen;
        this.wikiService.getSummary(lieu.dep).subscribe(summary => this.wiki = summary);
      },
      error: _ => this.router.navigateByUrl('/lieu')
    })



  }

}
