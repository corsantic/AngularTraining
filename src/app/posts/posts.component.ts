import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostsComponent implements OnInit{
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get(this.url)
     .subscribe(response => {
       this.posts = (response.json());
     });
   }

}
