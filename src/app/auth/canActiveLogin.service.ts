import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class CanActiveLogin implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const token = localStorage.getItem('authenticationToken');
        if (!token || token === null || token === undefined) {
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
            return false;
        } else {
            return true;
        }
    }
}

