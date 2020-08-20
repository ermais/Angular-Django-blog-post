import { Component, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../../service/auth.service";

import { PostService } from "../../service/post.service";


@Component({
    selector:'comment',
    template: `
<form [formGroup]="commentForm" (ngSubmit)="commentPost()">
    <div class="form-group">
        <input type="text" formControlName="comment" class="form-control">
        <button class="btn btn-primary mr-auto" type="submit" >comment</button>
    </div>
</form>
    `
})
export class CommentComponent {
    @Input() postId: number;
    commentForm:FormGroup
    constructor(private post: PostService) {
        
    }

    ngOnInit() {
        this.commentForm = new FormGroup({
            comment:new FormControl('')
        })
    }

    commentPost() {
        const comment = {
            "postId": this.postId,
            "body":this.commentForm.value['comment']
        }
        console.log(comment)
        this.post.commentPost(comment)
            .subscribe({
                next: res => {
                    this.commentForm.reset()
                },
                error: err => {
                    console.log(err)
                }
        })
    }
}
