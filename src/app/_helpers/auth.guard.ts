import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from '@app/login';

import { AuthenticationService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const user = this.authenticationService.userValue;

        
        // checking if user is authenticated
        if (user) {

            // No roles included user can enter
            if (!route.data.roles) return true;
            
            // if there are roles we search for one that matches the rout
            if (route && route.data && route.data.roles) {
                
                for (let role of user.role) {
                    
                    // Finding 1 ore more matching roles
                    if (route.data.roles.includes(role)) {                        
                        
                        // logged in so return true
                        return true;
                        
                    }
                }
            }      
         
            this.router.navigate(['/']);
           
            return false;           

        } else {

            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

            return false;

        }
    }
}