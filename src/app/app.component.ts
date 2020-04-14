import {Component} from '@angular/core';
import {PostModel} from "../models/PostModel";
import {PostService} from "./service/post.service";


@Component({
  selector: 'app-root',
  template: `<h1>{{msg}}</h1>
  <app-post *ngFor="let p of posts" [post]="p"></app-post>
  `,
  styles: ['h1{background: silver }']
})
export class AppComponent {
  msg = 'Post from JSON';
  posts: PostModel[];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }
}
