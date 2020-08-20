import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";



@Component({
    templateUrl: './auth-register.component.html',
})
export class RegisterComponent {
    userRegisterForm: FormGroup

    constructor(private auth: AuthService,private fb:FormBuilder,private route:Router) { }

    ngOnInit() {
        this.userRegisterForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            userName: ['', [Validators.required, Validators.minLength(8)]],
            password: ['', Validators.required],
            confirmPassword:['']
        })
    }

    

    register() {
        this.auth.register(this.userRegisterForm.value)
            .subscribe({
                next: res => {
                        console.log(res)
                        this.userRegisterForm.reset()
                        this.route.navigate(['/auth/login'])
                    
                },
                error: err => {
                    console.log(err.error)
                }
        })
    }


}