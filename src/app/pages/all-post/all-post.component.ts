import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent {
  allPostData:any;
  constructor(
    private snackBar: MatSnackBar,
    private postService: PostService
  ){}

  ngOnInit(){
    this.getAllPost();
  }

  getAllPost(){
    this.postService.getAllPost().subscribe((res)=>{
      console.log('res', res);
      this.allPostData = res;
    }, (err)=>{
      this.snackBar.open("Somethis went erong","OK");
    });
  }
}
