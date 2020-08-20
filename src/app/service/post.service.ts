import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class PostService {
    constructor(private http: HttpClient) {
        
    }

    getPosts() :Observable<any> {
        return this.http.get('/api/posts/')
    }

    getPost(slug:string): Observable<any>{
        return this.http.get(`/api/posts/${slug}`)
    }

    addPost(post):Observable<any> {
        return this.http.post('/api/posts/create/', {
            "title": post.title,
            "body": post.body,
            "user": 4
        },
            {
                headers: new HttpHeaders({ 'Content-type': 'application/json' })
            }
        );
    }

    commentPost(comment):Observable<any> {
        return this.http.post(`/api/posts/${comment.postId}/comment/create/`, {
            user: 4,
            post: comment.postId,
            body:comment.body
        }, {
                headers: new HttpHeaders({
                'Content-Type':'application/json'
            })
        })
    }

}