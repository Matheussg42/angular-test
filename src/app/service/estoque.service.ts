import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Estoque } from '../../model/estoque';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://127.0.0.1:8000/api/v1/estoques';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  getEstoques (): Observable<any> {
    return this.http.get(apiUrl, httpOptions);
  }

  storeEstoque (estoque): Observable<any> {
    return this.http.post(apiUrl, estoque, httpOptions);
  }

  showEstoque(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions);
  }

  getEstoqueLoja(loja_id: number): Observable<any> {
    const url = `${apiUrl}/loja/${loja_id}`;
    return this.http.get(url, httpOptions);
  }
  
  getEstoqueProduto(produto_id: number): Observable<any> {
    const url = `${apiUrl}/produtos/${produto_id}`;
    return this.http.get(url, httpOptions);
  }

  updateEstoque(id, estoque): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, estoque, httpOptions);
  }

  deleteEstoque (id): Observable<any> {
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

