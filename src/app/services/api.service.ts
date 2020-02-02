import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'brands');
  }

  getBrand(slug: string): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'brand/' + slug);
  }

  getBrandsByCounts(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'brands/by-counts');
  }

  getCategories(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'categories');
  }

  getMenu(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'menu');
  }
}
