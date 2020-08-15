import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  getPersona(): Observable<any> {
    const api = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<any>(api);

  }
}