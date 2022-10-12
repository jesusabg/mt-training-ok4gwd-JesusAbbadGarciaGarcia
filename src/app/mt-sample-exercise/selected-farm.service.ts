import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private _baseURI = 'assets/mock-data.json';

  private farmsObservable: Observable<[]>;

  getAllTasks() {
    const path = this._baseURI;
    this.farmsObservable = this.http.get<any>(path);
    return this.farmsObservable;
  }
}
