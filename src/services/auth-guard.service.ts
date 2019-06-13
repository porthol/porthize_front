import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';
import { NbAclService } from '@nebular/security';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: NbAuthService, private aclService: NbAclService, private router: Router) {}

    canActivate() {
        return this.authService.isAuthenticated().pipe(
            tap(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['/login']);
                }
            })
        );
    }
}
