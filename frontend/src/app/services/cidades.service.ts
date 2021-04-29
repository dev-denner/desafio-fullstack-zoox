import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  url: string = environment.url;

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  listCidade(id?: string, query?: string): Observable<any> {
    let url = `${this.url}/cidade`;
    if (id) {
      url = url + '/' + id;
    }
    if (query) {
      url = url + '?' + query;
    }
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  createCidade(cidade): Observable<any> {
    return this.http.post(`${this.url}/cidade`, cidade);
  }

  updateCidade(id: string, cidade): Observable<any> {
    return this.http.put(`${this.url}/cidade/${id}`, cidade);
  }

  deleteCidade(id: string): Observable<any> {
    return this.http.delete(`${this.url}/cidade/${id}`);
  }
}
