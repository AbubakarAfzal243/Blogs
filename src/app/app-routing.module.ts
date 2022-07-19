import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { UserGuardGuard } from './user-guard.guard';

const routes: Routes = [
  {
     path: '', redirectTo: "login", pathMatch: 'full' 
  },
  {
   path: 'create', component: CreateBlogComponent, canActivate: [UserGuardGuard] 
},
  {
     path: 'details/:_id', component: DetailBlogComponent 
  },
  {
    path: 'blogs/:name', component: BlogsListComponent 
 },
 {
   path: 'blogs', component: BlogsListComponent 
},
 {
   path: 'edit/:_id', component: EditBlogComponent 
},
 {
   path: 'login', component: LoginComponent 
},
{
   path: 'register', component: RegisterComponent 
},
{
   path: '**', component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
