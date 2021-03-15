import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfilSortie } from './profil-sortie.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  url = 'https://localhost:8000/api/admin/';

  private routePrefix: string = 'profil_sorties';

  constructor(private http: HttpClient) { }

  findAll(params?: any) {
    return this.http.get(this.getRoutePrefixWithSlash(), { params });
  }

  findApprenants(id: number) {
    return this.http.get(this.getRoutePrefixWithSlash() + id + "/apprenants");
  }

  findOneById(id: number) {
    return this.http.get(this.getRoutePrefixWithSlash() + id);
  }

  create(profil: ProfilSortie) {
    return this.http.post(this.url + this.routePrefix, profil);
  }

  update(id: number, profil: any) {
    return this.http.put(this.getRoutePrefixWithSlash() + id, profil);
  }

  remove(id: number) {
    return this.http.delete(this.getRoutePrefixWithSlash() + id);
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
