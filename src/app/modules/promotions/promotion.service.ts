import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  url = 'https://localhost:8000/api/admin/';

  private routePrefix: string = 'promotions';

  constructor(private http: HttpClient) { }

  findAll(params: any) {
    return this.http.get(this.getRoutePrefixWithSlash(), { params });
  }

  findOneById(id: number) {
    return this.http.get(this.getRoutePrefixWithSlash() + id);
  }

  create(promotion: any) {
    return this.http.post(this.url + this.routePrefix, promotion);
  }

  update(promotion: any) {
    return this.http.put(this.getRoutePrefixWithSlash() + promotion.id, promotion);
  }

  remove(id: number) {
    return this.http.delete(this.getRoutePrefixWithSlash() + id);
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
