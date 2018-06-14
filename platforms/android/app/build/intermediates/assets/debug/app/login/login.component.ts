import { Component, OnInit } from "@angular/core";
import * as tnsOAuthModule from 'nativescript-oauth';
import * as dialogs from 'ui/dialogs';
import { RouterExtensions } from "nativescript-angular";
import { Router } from "@angular/router";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

    
    public loginGoogle() {
        tnsOAuthModule.ensureValidToken()
            .then((token: string) => {
                console.log("token: " +token);
                this.router.navigate(["/tabs"]);
                
            })
        
            .catch((er) => {
                console.error('error logging in');
                console.dir(er);
            });
    }

    public onTapLogout() {
        tnsOAuthModule.logout()
            .then(() => console.log('logged out'))
            .catch((er) => {
                console.error('error logging out');
                console.dir(er);
            });
    }



    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.

    }
}