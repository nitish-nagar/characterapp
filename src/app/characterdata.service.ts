import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterdataService {

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/getData");
  }

  putData(data: any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/api/putData", data);
  }
}
