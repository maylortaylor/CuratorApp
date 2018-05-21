import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent }
];
export const AuthRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);