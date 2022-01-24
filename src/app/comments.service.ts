import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Commentaire } from 'src/interfaces/commentaire';
import { MessageService } from './message.service';
import { ObjectService } from './object.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends ObjectService<Commentaire> {

  getObjectUrl(): string {
    return 'comment';
  }

  constructor(
    protected override http: HttpClient,
    protected override messageService: MessageService
  ) {
    super(http, messageService);
  }

  getListById(id: string): Observable<Commentaire[]> {

    const res: Observable<Commentaire[]> = this.http.get<Commentaire[]>(`${this.APIUrl}/find/${id}`);

    return res
      .pipe(
        tap(_ => this.log(`fetched ${this.getObjectUrl()}s`)),
        catchError(this.handleError<Commentaire[]>("getList", []))
      );
  }


}
