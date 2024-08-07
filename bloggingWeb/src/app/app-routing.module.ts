import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { AllPostComponent } from './pages/all-post/all-post.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';

const routes: Routes = [
  {path:'create-post',component: CreatePostComponent},
  {path:'all-post',component: AllPostComponent},
  {path:'view-post/:id',component: ViewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
