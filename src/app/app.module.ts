import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsServiceService } from './blogs-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    CreateBlogComponent,
    DetailBlogComponent,
    BlogsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
  ],
  providers: [BlogsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
