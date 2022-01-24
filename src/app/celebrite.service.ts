import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Celebrite } from 'src/interfaces/celebrite';
import { MessageService } from './message.service';
import { ObjectService } from './object.service';

@Injectable({
  providedIn: 'root'
})
export class CelebriteService extends ObjectService<Celebrite> {

  getObjectUrl(): string {
    return "celeb";
  }

  constructor(
    protected override messageService: MessageService,
    protected override http: HttpClient
  ) {
    super(http, messageService);
  }
}
