import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";

import { AuthModule } from "./auth/auth.module";
import { PostModule } from "./post/post.module";


import { NavbarComponent } from "./navbar/navbar.component";
import { AppComponent } from './app.component';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',redirectTo:'/posts',pathMatch:'full'
      }
    ]),
    AuthModule,
    PostModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
