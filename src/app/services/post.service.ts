import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { BadInput } from '../../common/bad-input-error';

@Injectable()
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {

  }
  getPosts() {
    return this.http.get(this.url)
      .catch((error: Response) => {
        if (error.status === 404)
          return Observable.throw(new NotFoundError());
        else
          return Observable.throw(new AppError(error));
      });
  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch((error: Response) => {
        if (error.status === 404)
          return Observable.throw(new BadInput(error.json()));

        else
          return Observable.throw(new AppError(error.json()));
      });
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .catch((error: Response) => {
        if (error.status === 404)
          return Observable.throw(new NotFoundError());

        else
          return Observable.throw(new AppError(error.json()));
      });
  }○ş
  deletePost(id) {

    return this.http.delete(this.url + '/' + id)
      .catch((error: Response) => {
        if (error.status === 404)
          return Observable.throw(new NotFoundError());

        else
          return Observable.throw(new AppError(error.json()));

      });
  }
}
