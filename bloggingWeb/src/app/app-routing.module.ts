import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { AllPostComponent } from './pages/all-post/all-post.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { SearchByNameComponent } from './pages/search-by-name/search-by-name.component';

const routes: Routes = [
  {path:'create-post',component: CreatePostComponent},
  {path:'all-post',component: AllPostComponent},
  {path:'view-post/:id',component: ViewPostComponent},
  {path:'search-by-name',component: SearchByNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
