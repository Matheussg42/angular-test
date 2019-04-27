import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Loja } from '../../model/loja';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://127.0.0.1:8000/api/v1/lojas';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  constructor(private http: HttpClient) { }

  getLojas (): Observable<any> {
    return this.http.get(apiUrl, httpOptions);
  }

  storeLoja(loja): Observable<any> {
    return this.http.post(apiUrl, loja, httpOptions);
  }

  showLoja(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions);
  }

  updateLoja(id, loja): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, loja, httpOptions);
  }

  deleteLoja (id): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete(url, httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}

