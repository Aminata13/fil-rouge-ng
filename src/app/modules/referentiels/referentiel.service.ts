import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {
  url = 'https://localhost:8000/api/admin/';

  private routePrefix: string = 'referentiels';

  constructor(private http: HttpClient) { }

  findAll(params: any) {
    return this.http.get(this.getRoutePrefixWithSlash(), { params });
  }

  findOneById(id: number) {
    return this.http.get(this.getRoutePrefixWithSlash() + id);
  }

  create(referentiel: any) {
    return this.http.post(this.url + this.routePrefix, referentiel);
  }

  update(referentiel: any) {
    return this.http.put(this.getRoutePrefixWithSlash() + referentiel.id, referentiel);
  }

  remove(id: number) {
    return this.http.delete(this.getRoutePrefixWithSlash() + id);
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
