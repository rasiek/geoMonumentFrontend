import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lieu } from 'src/interfaces/lieu';
import { MessageService } from './message.service';
import { ObjectService } from './object.service';

@Injectable({
  providedIn: 'root'
})
export class LieuService extends ObjectService<Lieu> {

  getObjectUrl(): string {
    return "lieu";
  }

  constructor(
    protected override messageService: MessageService,
    protected override http: HttpClient
  ) {
    super(http, messageService);
  }
}
