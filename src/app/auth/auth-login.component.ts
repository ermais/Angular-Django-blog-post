import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../service/auth.service";



@Component({
    templateUrl: './auth-login.component.html',
})
export class UserLoginComponent {
    userLoginForm: FormGroup

    constructor(private auth: AuthService, private fb: FormBuilder,private route:Router) { }

    ngOnInit() {
        this.userLoginForm = this.fb.group({
            userName: ['', [Validators.required, Validators.minLength(8)]],
            password: ['', Validators.required],

        })
    }

    login() {
        this.auth.login(this.userLoginForm.value['userName'], this.userLoginForm.value['password'])
            .subscribe({
                next: res => {
                    if (res) {
                        this.userLoginForm.reset()
                        this.route.navigate(['/posts'])
                    }
                },
                error: err => {
                    console.log(err)
                }
        })
    }


}