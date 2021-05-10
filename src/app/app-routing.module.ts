import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';

const routes: Routes = [
  {
     path: 'create', component: CreateBlogComponent 
  },
  {
     path: 'details/:_id', component: DetailBlogComponent 
  },
  {
    path: 'blogs', component: BlogsListComponent 
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
