import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent {
  postId = this.activatedRoute.snapshot.params['id'];
  postData: any;
  commentForm!:FormGroup;
  comments:any;
  constructor(
    private snackBar: MatSnackBar,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private commentService: CommentService,
  ){}

  ngOnInit(){
    this.getPostById();
    this.commentForm = this.formBuilder.group({
      postBy: [null,Validators.required],
      content:['',Validators.required]
    });
  }

  publishComment(){
    const postBy = this.commentForm.get('postBy')?.value;
    const content = this.commentForm.get('content')?.value;
    this.commentService.createComment(this.postId,content, postBy).subscribe((data)=>{
      this.snackBar.open("Comment published successfully!!", "OK")
    }, (error)=>{
      this.snackBar.open("Something went Wrong!!", "OK");
    });
  }
  
  getPostById(){
    return this.postService.getPostById(this.postId).subscribe((data)=>{
      this.postData = data;
      this.getComments();
      console.log('Data', data);
    }, (error) => {
      this.snackBar.open("Somethis went erong","OK");
    });
  }

  getComments(){
    this.commentService.getAllCommentsByPostId(this.postId).subscribe((data)=>{
      console.log('Data', data);
      this.comments = data;
    }, (error) => {
      this.snackBar.open("Somethis went erong","OK");
    });
  }

  likePost(){
    this.postService.postLikes(this.postId).subscribe((data)=>{
      this.snackBar.open("Post liked Done!!","OK");
      this.getPostById();
     }, (error) => {
       this.snackBar.open("Somethis went erong","OK");
     });
  }
}
