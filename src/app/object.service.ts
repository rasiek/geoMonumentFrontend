import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';
import { User } from 'src/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export abstract class ObjectService<T> {

  protected readonly APIUrl = `${environment.APIUrl}/${this.getObjectUrl()}`

  constructor(
    protected http: HttpClient,
    protected messageService: MessageService
  ) { }

  abstract getObjectUrl(): string;

  getList(): Observable<T[]> {

    const res: Observable<T[]> = this.http.get<T[]>(`${this.APIUrl}/all`)

    return res
      .pipe(
        tap(_ => this.log(`fetched ${this.getObjectUrl()}`)),
        catchError(this.handleError<T[]>("getList", []))
      );
  }

  add(entity: T): Observable<T> {
    const res: Observable<T> = this.http.post<T>(`${this.APIUrl}/add`, entity);

    return res
      .pipe(
        tap(_ => this.log(`${this.getObjectUrl()} added`)),
        catchError(this.handleError<T>('add', {} as T))
      );
  }

  get(id: string | number): Observable<T> {
    const res: Observable<T> = this.http.get<T>(`${this.APIUrl}/find/${id}`)

    return res
      .pipe(
        tap(_ => this.log(`fetched ${this.getObjectUrl()} by id ${id}`)),
        catchError(this.handleError<T>('get', {} as T))
      )

  }

  protected log(message: string) {
    this.messageService.openSnackBar(`Service ${this.getObjectUrl()}: ${message}`);
  }

  protected handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
