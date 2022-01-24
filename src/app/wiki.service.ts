import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  private readonly wikiAPIUrl = 'https://fr.wikipedia.org/api/rest_v1/page/summary'

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  getSummary(searchKey: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }


    const res: Observable<any> = this.httpClient.get(`${this.wikiAPIUrl}/${searchKey.toLowerCase()}`, httpOptions)
    return res
      .pipe(
        tap(_ => this.log('summary fetched'))
      )
  }

  private log(message: string) {
    this.messageService.add(`Service Wiki: ${message}`);
  }
}
