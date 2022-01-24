import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/user';
import { MessageService } from './message.service';
import { ObjectService } from './object.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ObjectService<User> {
  getObjectUrl(): string {
    return 'user';
  }

  constructor(
    protected override http: HttpClient,
    protected override messageService: MessageService
  ) {
    super(http, messageService);
  }
}
