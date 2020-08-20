import { Component } from "@angular/core";
import { PostService } from '../service/post.service';

@Component({
    templateUrl:'./post-list.component.html'
})
export class PostListComponent{
    posts:any[]
    constructor(private postService: PostService) {
        
    }

    ngOnInit() {
        this.postService.getPosts()
            .subscribe({
                next: posts => {
                    this.posts = posts
                },
                error:err=>console.log(err)
        })
    }
}