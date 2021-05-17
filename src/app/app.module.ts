import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsServiceService } from './blogs-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserServiceService } from './user-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateBlogComponent,
    DetailBlogComponent,
    BlogsListComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
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
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [BlogsServiceService, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
