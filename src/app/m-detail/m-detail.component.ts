import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Monument } from 'src/interfaces/monument';
import { MonumentService } from '../monument.service';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-m-detail',
  templateUrl: './m-detail.component.html',
  styleUrls: ['./m-detail.component.css']
})
export class MDetailComponent implements OnInit {


  monument: Monument = {} as Monument;
  center = {} as google.maps.LatLngLiteral;
  zoom = 13;



  constructor(
    private monumentService: MonumentService,
    private route: ActivatedRoute,
    private wikiService: WikiService,
    private router: Router
  ) { }

  ngOnInit(): void {

    const id = String(this.route.snapshot.paramMap.get('id'));

    this.monumentService.get(id).subscribe({
      next: mon => {
        this.monument = mon
        console.log(mon)
        let lat = mon.latitude
        let cen: google.maps.LatLngLiteral = { lat: lat, lng: mon.longitude };
        this.center = cen;
      },
      error: _ => this.router.navigateByUrl('/monument')
    });



  }

}
