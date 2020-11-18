import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getAllEvents() {
    return this.http.get('/api/API/GetEvents', {}).toPromise();
  }
}