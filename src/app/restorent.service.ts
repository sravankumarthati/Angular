import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestorentService {
  private baseUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}
  getItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteItems(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  
}
