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
    return this.http.post(apiUrl, loja, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((loja: Loja) => console.log(`adicionou a loja com w/ id=${loja.id}`)),
      catchError(this.handleError<Loja>('storeLoja'))
    );
  }

  showLoja(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions);
  }

  updateLoja(id, loja): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, loja, httpOptions).pipe(
      tap(_ => console.log(`atualiza a loja com id=${id}`)),
      catchError(this.handleError<any>('updateLoja'))
    );
  }

  deleteLoja (id): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete(url, httpOptions).pipe(
      tap(_ => console.log(`remove a loja com id=${id}`)),
      catchError(this.handleError<Loja>('deleteLoja'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}

