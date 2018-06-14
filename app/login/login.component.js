"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tnsOAuthModule = require("nativescript-oauth");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        // Use the component constructor to inject providers.
    }
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        tnsOAuthModule.ensureValidToken()
            .then(function (token) {
            console.log("token: " + token);
            _this.router.navigate(["/tabs"]);
        })
            .catch(function (er) {
            console.error('error logging in');
            console.dir(er);
        });
    };
    LoginComponent.prototype.onTapLogout = function () {
        tnsOAuthModule.logout()
            .then(function () { return console.log('logged out'); })
            .catch(function (er) {
            console.error('error logging out');
            console.dir(er);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1EQUFxRDtBQUdyRCwwQ0FBeUM7QUFPekM7SUE0Qkksd0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzlCLHFEQUFxRDtJQUN6RCxDQUFDO0lBM0JNLG9DQUFXLEdBQWxCO1FBQUEsaUJBWUM7UUFYRyxjQUFjLENBQUMsZ0JBQWdCLEVBQUU7YUFDNUIsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRSxLQUFLLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFcEMsQ0FBQyxDQUFDO2FBRUQsS0FBSyxDQUFDLFVBQUMsRUFBRTtZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLG9DQUFXLEdBQWxCO1FBQ0ksY0FBYyxDQUFDLE1BQU0sRUFBRTthQUNsQixJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQXpCLENBQXlCLENBQUM7YUFDckMsS0FBSyxDQUFDLFVBQUMsRUFBRTtZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQVFELGlDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFFM0MsQ0FBQztJQW5DUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQTZCOEIsZUFBTTtPQTVCekIsY0FBYyxDQW9DMUI7SUFBRCxxQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgdG5zT0F1dGhNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LW9hdXRoJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgXG4gICAgcHVibGljIGxvZ2luR29vZ2xlKCkge1xuICAgICAgICB0bnNPQXV0aE1vZHVsZS5lbnN1cmVWYWxpZFRva2VuKClcbiAgICAgICAgICAgIC50aGVuKCh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbjogXCIgK3Rva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdGFic1wiXSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgICAgIC5jYXRjaCgoZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciBsb2dnaW5nIGluJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwTG9nb3V0KCkge1xuICAgICAgICB0bnNPQXV0aE1vZHVsZS5sb2dvdXQoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ2xvZ2dlZCBvdXQnKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciBsb2dnaW5nIG91dCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuXG4gICAgfVxufSJdfQ==