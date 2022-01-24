import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Monument } from 'src/interfaces/monument';
import { MessageService } from './message.service';
import { ObjectService } from './object.service';

@Injectable({
  providedIn: 'root'
})
export class MonumentService extends ObjectService<Monument> {


  getObjectUrl(): string {
    return "monument";
  }

  constructor(
    protected override messageService: MessageService,
    protected override http: HttpClient
  ) {
    super(http, messageService);
  }


}
