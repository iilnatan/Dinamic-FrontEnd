import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = environment.URL + 'personas/';

  constructor(private http: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.http.get<persona[]>(this.URL+'lista');
  }

  public detail(id:number): Observable<persona>{
    return this.http.get<persona>(this.URL + `detail/${id}`)
  }

  /*public save(experiencia: persona): Observable<any>{
    return this.httpclient.post<any>(this.expURL + 'create', experiencia);
  }*/

  public update(id: number, Persona: persona): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, Persona);
  } 

 /* public delete(id: number): Observable<any>{
    return this.httpclient.delete<any>(this.expURL + `delete/${id}`);
  }*/
}
