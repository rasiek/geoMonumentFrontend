import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Commentaire } from 'src/interfaces/commentaire';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Commentaire[] = [];
  authenticated: boolean = false;

  comm: Commentaire = {} as Commentaire;

  commentForm = this.formBuilder.group({
    message: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private commentService: CommentsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.authenticated = this.cookieService.check('jwt');
    this.getComments();

  }

  onSubmit() {
    this.comm.message = this.commentForm.value['message'];
    this.comm.author = this.cookieService.get('userName');
    this.comm.objectId = String(this.route.snapshot.paramMap.get('id'));
    this.commentService.add(this.comm).subscribe(_ => console.log(_));

    this.ngOnInit();
  }

  getComments(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.commentService.getListById(id)
      .subscribe(comms => this.comments = comms)
  }

}
