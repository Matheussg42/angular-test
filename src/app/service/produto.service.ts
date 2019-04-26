import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Produto } from '../../model/produto';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://127.0.0.1:8000/api/v1/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutos (): Observable<any> {
    return this.http.get(apiUrl, httpOptions);
    
      /* .pipe(
        tap(produtos => console.log('leu os produtos')),
        catchError(this.handleError('getProdutos', []))
      ); */
  }

  storeProduto (produto): Observable<any> {
    return this.http.post(apiUrl, produto, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((produto: Produto) => console.log(`adicionou o produto com w/ id=${produto.id}`)),
      catchError(this.handleError<Produto>('addProduto'))
    );
  }

  showProduto(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions);
  }

  updateProduto(id, produto): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, produto, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${id}`)),
      catchError(this.handleError<any>('updateProduto'))
    );
  }

  deleteProduto (id): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete(url, httpOptions).pipe(
      tap(_ => console.log(`remove o produto com id=${id}`)),
      catchError(this.handleError<Produto>('deleteProduto'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}

