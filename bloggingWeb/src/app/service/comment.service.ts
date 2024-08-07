import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  createComment(postId:number,postBy:String,content:String):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const params ={
      postId : postId,
      postBy : postBy,
      content : content
    };
    return this.http.post(`${URL}api/comments/create`,JSON.stringify(params),{ headers: headers });
  }

  getAllCommentsByPostId(postId:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${URL}api/comments/${postId}`,{headers});

  }
}
