import { Component } from '@angular/core';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })

export class AppComponent {

    user: User;

    constructor(private authenticationService: AuthenticationService) {

        this.authenticationService.user.subscribe(userData => this.user = userData);

    }

    logout() {

        this.authenticationService.logout();

    }
}