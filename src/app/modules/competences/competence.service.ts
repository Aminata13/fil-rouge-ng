import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  url = 'https://localhost:8000/api/admin/';

  private routePrefix: string = 'competences';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.getRoutePrefixWithSlash());
  }

  findOneById(id: number) {
    return this.http.get(this.getRoutePrefixWithSlash() + id);
  }

  create(competence: any) {
    return this.http.post(this.url + this.routePrefix, competence);
  }

  update(competence: any, id: number) {
    return this.http.put(this.getRoutePrefixWithSlash() + id, competence);
  }

  remove(id: number) {
    return this.http.delete(this.getRoutePrefixWithSlash() + id);
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
