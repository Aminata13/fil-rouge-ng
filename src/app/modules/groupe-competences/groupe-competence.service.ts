import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupeCompetence } from './groupe-competence.model';

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetenceService {

  url = 'https://localhost:8000/api/admin/';

  private routePrefix: string = 'groupe_competences';

  constructor(private http: HttpClient) { }

  findAll(params?: any) {
    return this.http.get(this.getRoutePrefixWithSlash(), { params });
  }

  findAllWithCompetences() {
    return this.http.get(this.getRoutePrefixWithSlash() + 'competences');
  }

  findOneById(id: number) {
    return this.http.get(this.getRoutePrefixWithSlash() + id);
  }

  create(groupeCompetence: any) {
    return this.http.post(this.url + this.routePrefix, groupeCompetence);
  }

  update(groupeCompetence: GroupeCompetence, id: number) {
    return this.http.put(this.getRoutePrefixWithSlash() + id, groupeCompetence);
  }

  remove(id: number) {
    return this.http.delete(this.getRoutePrefixWithSlash() + id);
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
