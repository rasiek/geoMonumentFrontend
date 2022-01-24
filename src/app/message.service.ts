import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'dismiss')
  }

  clear() {
    this.messages = [];
  }

  constructor(private snackBar: MatSnackBar) { }
}
