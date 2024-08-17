import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const URL = 'http://webblogdemo.ap-southeast-2.elasticbeanstalk.com/';

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

  postLikes(postId:number):Observable<any> {
    return this.http.put(`${URL}api/posts/${postId}/like`,{});
  }

  searchByname(name:String):Observable<any> {
    return this.http.get(`${URL}api/posts/search/${name}`);
  }
}
