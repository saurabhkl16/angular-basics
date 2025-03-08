import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public loading = signal(false);

  constructor(private http: HttpClient) {}

  public callApi(url: string): Observable<any> {
    return this.http.get(url);
  }

  show() {
    this.loading.set(true);
  }

  hide() {
    this.loading.set(false);
  }
}
