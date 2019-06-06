import { NbRoleProvider } from '@nebular/security';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RoleProvider implements NbRoleProvider {
    constructor(private authService: NbAuthService) {}

    getRole(): Observable<string | string[]> {
        return this.authService.onTokenChange().pipe(
            map((token: NbAuthJWTToken) => {
                return token.isValid() ? token.getPayload()['roles'] : 'guest';
            })
        );
    }
}
