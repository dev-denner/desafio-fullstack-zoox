import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

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

  listEstado(id?: string, query?: string): Observable<any> {
    let url = `${this.url}/estado`;
    if (id) {
      url = url + '/' + id;
    }
    if (query) {
      url = url + '?' + query;
    }
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  createEstado(estado): Observable<any> {
    return this.http.post(`${this.url}/estado`, estado);
  }

  updateEstado(id: string, estado): Observable<any> {
    return this.http.put(`${this.url}/estado/${id}`, estado);
  }

  deleteEstado(id: string): Observable<any> {
    return this.http.delete(`${this.url}/estado/${id}`);
  }

}
