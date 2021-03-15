import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any;
  currentUser: any;
  firstname: string = '';
  option: boolean = true;

  pageSize = 3;
  pageSizes = [3, 6, 9];
  page = 1;
  total: number = 7;

  constructor(private userSrv: UserService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getCurrentUser();
  }

  getUsers() {
    const params = this.getRequestParams(this.firstname, this.page, this.pageSize);
    this.userSrv.findAll(params).subscribe((data: any) => {
      this.users = data['hydra:member'];
      this.total = +data['hydra:totalItems'];
    });
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser')!;
    this.currentUser = JSON.parse(user);
  }

  handlePageChange(event: number) {
    this.page = event;
    this.getUsers();
  }

  handlePageSizeChange(event: any) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getUsers();
  }

  getRequestParams(firstname: string, page: number, pageSize: number): any {
    let params: any = {};

    if (firstname) {
      params[`firstname`] = firstname;
    }

    if (page) {
      params[`page`] = page;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  onDelete(id: number, index: number) {
    if(confirm("Etes vous sûr de vouloir supprimer cet utilisateur? Cette action est irreversible.")) {
      this.userSrv.remove(id).subscribe(
        () => {
          this.users.splice(index, 1);
        }
      );
    }
  }
}
