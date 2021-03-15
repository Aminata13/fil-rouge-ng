import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserProfilService } from '../user-profil.service';

@Component({
  selector: 'app-user-profil-show',
  templateUrl: './user-profil-show.component.html',
  styleUrls: ['./user-profil-show.component.scss']
})
export class UserProfilShowComponent implements OnInit {
  profil: any;
  users: any;
  id: number;

  constructor(private route: ActivatedRoute, private userProfilSrv: UserProfilService, private location: Location) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getProfil();
    this.getUsers();
  }

  getProfil(): void {
    this.userProfilSrv.findOneById(this.id)
      .subscribe(profil => this.profil = profil);
  }

  getUsers(): void {
    this.userProfilSrv.findUsers(this.id)
      .subscribe((data: any) => this.users = data['hydra:member']);
  }

  goBack(): void {
    this.location.back();
  }
}
