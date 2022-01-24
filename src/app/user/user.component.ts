import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  reqValid: boolean = true;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.userService.getList()
      .subscribe({
        next: users => this.users = users,
        error: e => {
          console.log(e);
          this.reqValid = false;
        }
      })
  }

}
