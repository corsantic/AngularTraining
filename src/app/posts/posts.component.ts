import { BadInput } from './../../common/bad-input-error';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = (response.json());
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {
      title: input.value
    };
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post.id = response.json().id;
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          alert("This post has already created");
        }
        else throw error;

      });

  }
  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());

      },
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert("This post has already been updated");
        else throw error;
      }); 

  }

  deletePost(post) {
    this.service.deletePost(305)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert("This post has already been deleted");
        else throw error;
   
   
      });
  }


}
