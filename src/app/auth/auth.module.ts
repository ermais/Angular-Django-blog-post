import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormArray } from "@angular/forms";

import { RegisterComponent } from "./auth-register.component";
import { UserLoginComponent } from "./auth-login.component";

//service
import { AuthService } from "../service/auth.service";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: 'auth', children: [
                    {
                        path: 'login', component: UserLoginComponent
                    },
                    {
                        path: 'register', component: RegisterComponent
                    }

                ]
            }
        ]),

    ],
    providers: [
        AuthService
    ],
    declarations: [
        RegisterComponent,
        UserLoginComponent

    ],
})
export class AuthModule { }