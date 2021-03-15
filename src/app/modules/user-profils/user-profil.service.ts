import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfil } from './user-profil.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfilService {

  url = 'https://localhost:8000/api/admin/';

  private routePrefix: string = 'user_profils';

  constructor(private http: HttpClient) { }

  findAll(params?: any) {
    return this.http.get(this.getRoutePrefixWithSlash(), { params });
  }

  findUsers(id: number) {
    return this.http.get(this.getRoutePrefixWithSlash() + id + "/users");
  }

  findOneById(id: number) {
    return this.http.get(this.getRoutePrefixWithSlash() + id);
  }

  create(profil: UserProfil) {
    return this.http.post(this.url + this.routePrefix, profil);
  }

  update(profil: UserProfil) {
    return this.http.put(this.getRoutePrefixWithSlash() + profil.id, profil);
  }

  remove(id: number) {
    return this.http.delete(this.getRoutePrefixWithSlash() + id);
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
