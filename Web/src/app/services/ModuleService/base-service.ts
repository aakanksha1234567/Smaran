import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBaseService } from '../ModuleInterfaces/IBase-service';

@Injectable()
export class BaseService extends IBaseService {

  private readonly _baseUrl: string;
  constructor(private http: HttpClient) {
    super();
    // need to set base url 
    this._baseUrl = 'http://localhost:8050/api/';
  }

  getRequest = <T>(url: string): Observable<any> => this.http.get<T>(`${this._baseUrl}${url}`);

  getRequestDownloadFile = (url: string): Observable<any> => this.http.get(`${this._baseUrl}${url}`, { responseType: 'blob' });

  postRequest = <T>(url: string, model: any): Observable<any> => this.http.post<T>(`${this._baseUrl}${url}`, model);

  putRequest = <T>(url: string, model: any): Observable<any> => this.http.put<T>(`${this._baseUrl}${url}`, model);

  patchRequest = <T>(url: string, model: any): Observable<any> => this.http.patch<T>(`${this._baseUrl}${url}`, model);

  postRequestWithHeader = <T>(url: string, model: any, headers: HttpHeaders): Observable<any> => this.http.post<T>(`${this._baseUrl}${url}`, model, { headers: headers });

  postRequestDownloadFile = (url: string, model: any): Observable<any> => this.http.post<any>(`${this._baseUrl}${url}`, model, { responseType: 'blob' as 'json' });

  deleteRequest = <T>(url: string): Observable<any> => this.http.delete<T>(`${this._baseUrl}${url}`);
 
}
