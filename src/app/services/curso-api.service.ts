import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoApiService {

  constructor(
    private http: HttpClient
  ) { }
  getAllCursos(){
    return this.http.get('https://randomuser.me/api/?results=25');
  }
}
