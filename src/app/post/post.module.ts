import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { PostAddComponent } from "./post-add.component";
import { PostListComponent } from "./post-list.component";
import { PostDetailComponent } from "./post-detail.component";
import { PostEditComponent } from "./post-edit.component";
import { CommentComponent } from './common/comment.component'

import { PostService } from '../service/post.service';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: 'posts', children: [
                    {
                        path:'',component:PostListComponent
                    },
                    {
                        path:'add',component:PostAddComponent,
                    },
                     {
                        path:':slug',component:PostDetailComponent,
                    },
                    {
                        path:':slug/edit',component:PostEditComponent,
                    }
                ]
            }
        ])
    ],
    declarations: [
        PostAddComponent,
        PostListComponent,
        PostDetailComponent,
        PostEditComponent,
        CommentComponent
    ],
    providers: [
        PostService
    ]
})
export class PostModule{}