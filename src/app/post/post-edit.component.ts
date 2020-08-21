import { Component, OnInit, OnChanges } from "@angular/core";
import { FormGroup, FormControl, Form } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { PostService } from "../service/post.service";


@Component({
    templateUrl: './post-edit.component.html',
})
export class PostEditComponent implements OnInit,OnChanges {
    postUpdateForm: FormGroup
    old_value: any;
    title: FormControl
    body: FormControl

    constructor(private post:PostService,private route:ActivatedRoute){}
    

    ngOnInit() {
        let slug;
       this.route.paramMap.subscribe(params => {
            slug = params.get('slug')
       })
        this.title = new FormControl('')
        this.body = new FormControl('')
        this.postUpdateForm = new FormGroup({
            title: this.title,
            body: this.body
        })

        this.post.getPost(slug).subscribe({
            next: res => {
                this.old_value = res;
                this.populateValue()
            }
        })




    }

    ngOnChanges() {
        console.log(this.postUpdateForm)
    }

    populateValue() {

        this.postUpdateForm.patchValue({
            title: this.old_value?.title,
            body: this.old_value?.body
        })

        console.log('postUpdateForm',this.postUpdateForm.value)
    }

    updatePost() {
        this.route.paramMap.subscribe(params => {
            const slug = params.get('slug')
            this.post.updatePost(slug, this.postUpdateForm.value)
                .subscribe({
                    next: res => {
                        console.log(res)
                    },
                    error: err => {
                        console.log(err)
                    }
            })
        })
    }
}