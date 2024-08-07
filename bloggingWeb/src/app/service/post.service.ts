import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  createNewPost(data:any): Observable<any>{
    return this.http.post(`${URL}api/posts`, data);
  }

  getAllPost(): Observable<any>{
    return this.http.get(`${URL}api/posts`);
  }

  getPostById(postId:number):Observable<any> {
    return this.http.get(`${URL}api/posts/${postId}`);
  }
}
