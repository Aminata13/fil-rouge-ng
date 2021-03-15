import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProfilSortieService } from '../profil-sortie.service';

@Component({
  selector: 'app-profil-sortie-show',
  templateUrl: './profil-sortie-show.component.html',
  styleUrls: ['./profil-sortie-show.component.scss']
})
export class ProfilSortieShowComponent implements OnInit {
  profil: any;
  apprenants: any;
  id: number;

  constructor(private route: ActivatedRoute, private profilSortieSrv: ProfilSortieService, private location: Location) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getProfil();
    this.getApprenants();
  }

  getProfil(): void {
    this.profilSortieSrv.findOneById(this.id)
      .subscribe(profil => this.profil = profil);
  }

  getApprenants(): void {
    this.profilSortieSrv.findApprenants(this.id)
      .subscribe((data: any) => this.apprenants = data['hydra:member']);
  }

  goBack(): void {
    this.location.back();
  }

}
