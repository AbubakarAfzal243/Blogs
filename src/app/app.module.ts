import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBlogComponent,
    DetailBlogComponent,
    HeaderComponent,
    FooterComponent,
    BlogsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
