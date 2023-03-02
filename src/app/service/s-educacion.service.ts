import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {
  edUrl = environment.URL + 'educacion/'
  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpclient.get<Educacion[]>(this.edUrl+'lista');
  }
  public detail(id:number): Observable<Educacion>{
    return this.httpclient.get<Educacion>(this.edUrl + `detail/${id}`)
  }
  public save(educacion: Educacion): Observable<any>{
    return this.httpclient.post<any>(this.edUrl + 'create', educacion);
  }
  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpclient.put<any>(this.edUrl + `update/${id}`, educacion);
  }
  public delete(id: number): Observable<any>{
    return this.httpclient.delete<any>(this.edUrl + `delete/${id}`);
  }
}
