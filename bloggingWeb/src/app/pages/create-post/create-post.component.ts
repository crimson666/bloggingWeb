import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  postForm!:FormGroup;
  tags:String[]=[];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
  ){}
  ngOnInit(){
    this.postForm = this.fb.group({
      name: [null, Validators.required],
      content: [null,Validators.required,Validators.maxLength(5000)],
      img:[null,Validators.required],
      postBy:[null,Validators.required]
    });
  }

  add(event:any){
    const value = (event.value || '').trim();
    if(value){
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  remove(tag:any){
    const index=this.tags.indexOf(tag);
    if(index>0){
      this.tags.splice(index,1);
    }
  }

}
