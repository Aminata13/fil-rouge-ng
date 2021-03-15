import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://localhost:8000/api/admin/';
  private routePrefix: string = 'users';

  constructor(private http: HttpClient) { }

  findAll(params: any) {
    return this.http.get(this.getRoutePrefixWithSlash(), { params });
  }

  findOneById(id: number) {
    return this.http.get(this.getRoutePrefixWithSlash() + id);
  }

  findOneByUsername(username: string) {
    return this.http.get(this.getRoutePrefixWithSlash() + username + '/check');
  }

  create(routePrefix: string, user: any) {
    return this.http.post('https://localhost:8000/api/' + routePrefix, user);
  }

  update(routePrefix: string, user: any, id: number) {
    return this.http.put(`https://localhost:8000/api/${routePrefix}/${id}`, user);
  }

  remove(id: number) {
    return this.http.delete(this.getRoutePrefixWithSlash() + id);
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
