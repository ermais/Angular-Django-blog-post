import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PostService } from "../service/post.service";



@Component({
    templateUrl:'./post-add.component.html',
})
export class PostAddComponent{
    postForm: FormGroup

    constructor(private post: PostService,private fb:FormBuilder) { }

    ngOnInit() {
        this.postForm = this.fb.group({
            title: ['', Validators.required],
            body: ['',Validators.required]
        })
    }
    
    addPost() {
        console.log(this.postForm)
        this.post.addPost(this.postForm.value)
            .subscribe({
                next: res => {
                    if (res.ok === true) {
                        this.postForm.reset()
                    }
                },
                error:err=>console.log('err',err)
        })
    }
    

}