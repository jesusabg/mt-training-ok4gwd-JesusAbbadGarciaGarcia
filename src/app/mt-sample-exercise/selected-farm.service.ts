import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SelectedFarmService {
  constructor(private http: HttpClient) {}
  private _baseURI = 'assets/mock-data.json';
  getAllTasks() {
    const path = this._baseURI;
    return this.http.get<[]>(path).toPromise();
  }

  getAllTasksError(event) {
    const path = this._baseURI;
    return this.http.get<[]>(event, path);
  }
}
