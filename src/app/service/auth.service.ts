import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {
        
    }

    login(userName: string, password: string):Observable<any> {
        return this.http.post('/api/user/login/', {
            username: userName,
            password:password
        }, {
            headers:new HttpHeaders({'Content-Type':'application/json'})
        })
    }

    register(user):Observable<any> {
        return this.http.post('/api/user/register/', {
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            username: user.userName,
            password: user.password
        }, {
                headers: new HttpHeaders({
                'Content-Type':'application/json'
            })
        })
    }
}