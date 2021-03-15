import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {
  user: any;
  id: number;

  constructor(private route: ActivatedRoute, private userSrv: UserService, private location: Location) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
   }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userSrv.findOneById(this.id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }
}
