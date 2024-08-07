import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.scss']
})
export class SearchByNameComponent {
  allPost!:any;
  name:any ="";
  constructor(
    private snackBar: MatSnackBar,
    private postService: PostService
  ){}
  searchByName(){
    this.postService.searchByname(this.name).subscribe((res)=>{
      console.log(res);
      this.allPost = res;
    },error =>{
      this.snackBar.open("Somethis went erong","OK");
    })
  }
}
