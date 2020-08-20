import { Component } from "@angular/core";
import { PostService } from "../service/post.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl:'./post-detail.component.html'
})
export class PostDetailComponent{
    post: any
    
    constructor(private postService:PostService,private route:ActivatedRoute) {
        
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let slug = params.get('slug')
            this.postService.getPost(slug)
                .subscribe({
                    next: post => {
                        this.post = post
                        console.log('post', post)
                    },
                    error: err => console.log(err)
                })
        })
        
            
    }
}